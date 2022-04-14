import Tabs from "./components/tabs/Tabs";
import React from "react";
import { DataProvider } from "./contexts/dataContext";
import { Variables } from "./components/variables/Variables";

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Tabs />
        <Variables />
      </div>
    </DataProvider>
  );
}

export default App;
