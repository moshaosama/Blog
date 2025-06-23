import type { ReactNode } from "react";

export interface ThemeContextData {
  theme: string;
  handleToggleTheme: () => void;
}

export interface ContextProps {
  children: ReactNode;
}
