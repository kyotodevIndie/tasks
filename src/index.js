import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import TodoProvider from "./context/TodoContext";

import "antd/dist/antd.css";
import "./styles/global.scss";

ReactDOM.render(
    <TodoProvider>
        <App />
    </TodoProvider>,
    document.getElementById("root")
);
