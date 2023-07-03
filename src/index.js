import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Loginstate from "./context/state";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Loginstate>
      <App />
    </Loginstate>
  </StrictMode>
);
