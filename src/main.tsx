import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";

import ThemeProvider from "./Context/ThemeContext.tsx";
import { Store } from "./Store/store.ts";
import OpenSidebarProvider from "./Context/OpenSidebar.tsx";

// #1b1b1b
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={Store}>
        <OpenSidebarProvider>
          <App />
        </OpenSidebarProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
