import type { ReactNode } from "react";
import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

const Text_Elements = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={cn(theme === "light" ? "text-black" : " text-white")}>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child);
      })}
    </div>
  );
};

export default Text_Elements;
