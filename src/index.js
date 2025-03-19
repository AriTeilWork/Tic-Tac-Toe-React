import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { i } from "framer-motion/client";

const entryPoint = document.getElementById("root");
//ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(entryPoint).render(React.createElement(App));