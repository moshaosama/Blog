import BoxImage from "../Atomic/BoxImage";
import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";
import type { Hero_Pages_Props } from "../../Types/Hero_Pgaes.type";
import React from "react";

const Hero_Pages = ({ ImageUrl, children }: Hero_Pages_Props) => {
  const { theme } = useTheme();
  return (
    <div className="flex max-sm:flex-col">
      <div
        className={cn(
          "border-b-2 border-r-2 max-sm:border-none  w-1/2 max-sm:w-full",
          theme === "light"
            ? "border-b-black border-r-black"
            : "border-b-white border-r-white"
        )}
      >
        <BoxImage ImageURL={ImageUrl} Height="" Width="45pc" isText={false} />
      </div>

      <div
        className={cn(
          "border-b-2 border-l-2 max-sm:border-none  w-1/2  max-sm:w-full flex flex-col items-center justify-center gap-10 ",
          theme === "light"
            ? "border-b-black border-l-black  text-black"
            : "border-b-white border-l-white text-white"
        )}
      >
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child);
        })}
      </div>
    </div>
  );
};

export default Hero_Pages;
