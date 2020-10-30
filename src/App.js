import React, { useState } from "react";
import "./App.css";

import Checkbox from "./components/Checkbox";

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Checkbox id="react-checkbox" checked={checked} onChange={setChecked}>
          React CheckBox
        </Checkbox>
      </header>
    </div>
  );
};

export default App;
