import { Variable } from "./Variable";
import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";

export function Variables() {
  const { variables } = useContext(DataContext);
  return (
    <div className="variables">
      {variables &&
        variables.map((item, index) => (
          <Variable
            key={`${item.name}_${index}`}
            index={index}
            name={item.name}
            value={item.value}
          />
        ))}
    </div>
  );
}
