import { useEffect, useState } from "react";
import classnames from "classnames";
import { ReactComponent as Trash } from "../../assets/svg/trash_bin.svg";
import Icon from "../Icon";

export default function Tab({ title, active, onClick, className, ...props }) {
  const [deletable, setDeletable] = useState(false);

  useEffect(() => {
    !active && setDeletable(false);
  }, [active]);

  return (
    <button
      {...props}
      onClick={onClick}
      className={classnames(className, "tab", { active })}
    >
      <span className="tabTitle">
        {deletable ? <Icon icon={<Trash />} /> : title}
      </span>
    </button>
  );
}
