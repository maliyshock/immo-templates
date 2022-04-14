import classNames from "classnames";

export default function Button({ title, onClick, className, children }) {
  return (
    <button onClick={onClick} className={classNames("button", className)}>
      {title}
      {children}
    </button>
  );
}
