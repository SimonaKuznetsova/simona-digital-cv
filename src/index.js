import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components2/App";
import reportWebVitals from "./reportWebVitals";
import Background from "./components2/Background/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppComponent = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <App theme={theme} setTheme={setTheme}/>
      {/* <Background theme={theme}/> */}
    </>
  );
};
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
