import type { ReactElement } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

const HeaderForSection = ({ Title }: { Title: string | ReactElement }) => {
  const { theme } = useTheme();
  return (
    <div className="mx-10 max-sm:mx-2 my-20">
      <h1
        className={cn(
          theme === "light" ? "text-black" : "text-white",
          "font-bold text-4xl"
        )}
      >
        {Title}
      </h1>
    </div>
  );
};

export default HeaderForSection;
