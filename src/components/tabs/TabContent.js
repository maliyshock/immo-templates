import Icon from "../Icon";
import { ReactComponent as Trash } from "../../assets/svg/trash_bin.svg";
import { useContext, useState } from "react";
import Message from "../Message";
import Button from "../Button";
import { DataContext } from "../../contexts/dataContext";

export default function TabContent({ children, index, ...props }) {
  const [showMessage, setShowMessage] = useState(false);
  const { tabs, setTabs, active } = useContext(DataContext);

  return (
    <div {...props} style={{ display: active !== index ? "none" : "flex" }}>
      {showMessage && (
        <Message
          decline={{ handler: () => setShowMessage(false), title: "No" }}
          accept={{
            handler: () => {
              const newTabs = [...tabs];
              newTabs.splice(index, 1);
              setTabs(newTabs);
              setShowMessage(false);
            },
            title: "Yes",
          }}
          title="Are you sure you want to delete this tab?"
        />
      )}

      <div className="tabs__panel">
        <Button onClick={() => setShowMessage(true)} className="button--reset">
          <Icon icon={<Trash />} />
        </Button>
      </div>
      {children}
    </div>
  );
}
