import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";
import type { TextAnimationProps } from "../../Types/TextAnimation.type";
import MediaQueryStyle from "../../Modules/MediaQuery.module.css";

export const TextAnimation = ({ Title, fontSize }: TextAnimationProps) => {
  const { theme } = useTheme();
  const { textAnimation } = MediaQueryStyle;
  return (
    <div className="group cursor-pointer">
      <h1
        className={cn("font-bold", textAnimation)}
        style={{ fontSize: fontSize }}
      >
        {Title}
      </h1>
      <span
        className={cn(
          "h-1 transition-all block duration-1000 w-0 group-hover:w-full mt-1 rounded-xl border-none",
          theme === "light" ? "bg-[#7b00d3]" : "bg-[#ffdb4d]"
        )}
      ></span>
    </div>
  );
};
