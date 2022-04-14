import { useContext } from "react";
import Textarea from "../Textarea";
import Tab from "./Tab";
import TabContent from "./TabContent";
import { DataContext } from "../../contexts/dataContext";

export default function Tabs() {
  const { tabs, setTabs, active, setActive } = useContext(DataContext);

  return (
    <div className="tabs">
      <header className="tabs__head">
        <ul className="tabs__list">
          {tabs.map((tab, index) => (
            <li className="tabs__item" key={`tab_${index}`}>
              <Tab
                active={active === index}
                onClick={() => {
                  if (active !== index) {
                    setActive(index);
                  }
                }}
                title={index}
              />
            </li>
          ))}
          {tabs.length < 9 && (
            <li className="tabs__item">
              <Tab
                className="add"
                onClick={() => {
                  setTabs([...tabs, { title: tabs.length + 1, template: "" }]);
                }}
                title="+"
              />
            </li>
          )}
        </ul>
      </header>
      <div className="tabs__body">
        {tabs.length > 0 ? (
          tabs.map((tab, index) => (
            <TabContent
              className="tabs__content"
              index={index}
              key={`tab_content_${index}`}
            >
              <Textarea index={index} />
            </TabContent>
          ))
        ) : (
          <div className="empty-content">Please add some templates</div>
        )}
      </div>
    </div>
  );
}
