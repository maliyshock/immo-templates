import { createRef, useCallback, useContext, useEffect } from "react";
import { DataContext } from "../contexts/dataContext";
import { variablesRegexp } from "../const";

function cleanString(string) {
  return string.replace(/[^a-zA-Z_ ]/g, "");
}

export default function Textarea() {
  const { position, setPosition, tabs, variables, setTabs, active } =
    useContext(DataContext);
  const textareaRef = createRef();

  const validateAndReplace = useCallback(
    (template) => {
      let resultingMatch;
      let variableValue;
      let result = template.replace(variablesRegexp, (match) => {
        const name = cleanString(match);
        const result = variables.find((variable) => variable.name === name);
        resultingMatch = match;
        variableValue = result.value;

        return result.value;
      });
      return { template: result, match: resultingMatch, variableValue };
    },
    [variables]
  );

  const resultOfReplacement = validateAndReplace(tabs[active].template);

  useEffect(() => {
    if (resultOfReplacement.match && resultOfReplacement.variableValue) {
      textareaRef.current.selectionEnd =
        position -
        resultOfReplacement?.match.length +
        resultOfReplacement?.variableValue.length +
        1;
    }
  }, [
    position,
    resultOfReplacement.match,
    resultOfReplacement.variableValue,
    textareaRef,
  ]);

  return (
    <div className="textarea-wrapper">
      <textarea
        ref={textareaRef}
        onClick={(e) => {
          setPosition(e.target.selectionStart);
          // new value comes from outside, but local state stays the same
          // then onChange triggers
        }}
        onChange={(e) => {
          const newTabs = [...tabs];
          newTabs[active].template = e.currentTarget.value;
          setTabs(newTabs);
          setPosition(e.target.selectionStart);
        }}
        className="textarea"
        // validate and replace keys by their values locally
        value={resultOfReplacement.template}
      />
    </div>
  );
}
