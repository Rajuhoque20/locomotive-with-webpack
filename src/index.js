import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
console.warn = () => { };
console.error = () => { };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <App />
  
);
reportWebVitals();

{/* <React.StrictMode>
<App />
</React.StrictMode> */}
