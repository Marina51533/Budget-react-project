import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import React from "react";
import { BudgetsProvider } from "./contexts/budgetContext.jsx";

render(
  <BudgetsProvider>
    <App />
  </BudgetsProvider>,
  document.getElementById("app")
);
