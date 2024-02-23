import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AddTaskForm from "./AddTaskForm"; 
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AddTaskForm /> {

      }
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
