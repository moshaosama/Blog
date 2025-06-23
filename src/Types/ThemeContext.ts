import type { ReactNode } from "react";

export interface ThemeContextData {
  theme: string;
  handleToggleTheme: () => void;
}

export interface ThemeContextProps {
  children: ReactNode;
}
