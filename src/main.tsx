import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";

import ThemeProvider from "./Context/ThemeContext.tsx";
import { Store } from "./Store/store.ts";

// #1b1b1b
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
