import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DrumMachine from "./DrumMachine";
// ReactDOM.createRoot(document.getElementById('root')).render(<DrumMachine />);
ReactDOM.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>,
  document.getElementById("root")
);
