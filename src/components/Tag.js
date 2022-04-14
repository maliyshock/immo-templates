import classNames from "classnames";

export function Tag({ children, className, ...props }) {
  return (
    <div {...props} className={classNames(className, "tag")}>
      {children}
    </div>
  );
}
