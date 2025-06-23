import { createContext, useContext, useState } from "react";
import type { openSidebarContextType } from "../Types/openSidebarContext";
import type { ContextProps } from "../Types/ThemeContext";

const openSidebarContext = createContext<openSidebarContextType | null>(null);

const OpenSidebarProvider = ({ children }: ContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpen(true);
  };
  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <openSidebarContext.Provider
      value={{ isOpen, handleOpenSidebar, handleCloseSidebar }}
    >
      {children}
    </openSidebarContext.Provider>
  );
};

export default OpenSidebarProvider;

export const useOpenSidebar = () => {
  const context = useContext(openSidebarContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
