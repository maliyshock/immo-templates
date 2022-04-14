import Button from "./Button";

export default function Message({ title, decline, accept }) {
  return (
    <div className="message">
      <div className="message__body">
        <div className="message__row">
          <h3 className="message__title">{title}</h3>
        </div>
        <div className="message__row between">
          {decline && (
            <Button
              className="button--reset button--hollow button--default"
              onClick={decline.handler}
              title={decline.title}
            />
          )}
          {accept && (
            <Button
              className="button--reset button--fill button--default"
              onClick={accept.handler}
              title={accept.title}
            />
          )}
        </div>
      </div>
    </div>
  );
}
