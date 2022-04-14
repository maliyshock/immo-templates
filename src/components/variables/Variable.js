import classNames from "classnames";
import { colors } from "../../const";
import { Input } from "../Input";
import { Tag } from "../Tag";
import { useCallback, useContext } from "react";
import { DataContext } from "../../contexts/dataContext";

function createNewString({ position, value, textAreaValue }) {
  const before = textAreaValue.slice(0, position);
  const after = textAreaValue.slice(position);
  return before + "${" + value + "}" + after;
}

export function Variable({ name, value, index }) {
  const { position, setTabs, tabs, active, variables, setVariables } =
    useContext(DataContext);

  const handleClick = useCallback(() => {
    const textAreaValue = tabs[active].template;

    if (textAreaValue) {
      const newTabs = [...tabs];

      newTabs[active].template = createNewString({
        position,
        value: name,
        textAreaValue,
      });

      setTabs(newTabs);
    }
  }, [active, name, position, setTabs, tabs]);

  return (
    <>
      <div>
        <Tag
          onClick={handleClick}
          className={classNames("variable__name", colors[name])}
        >
          {name.toLowerCase()}
        </Tag>
      </div>
      <div className="variable__equal">=</div>
      <div className="variable__value">
        <Input
          value={value}
          onChange={(value) => {
            const newVariables = [...variables];
            newVariables[index].value = value;
            setVariables(newVariables);
          }}
        />
      </div>
    </>
  );
}
