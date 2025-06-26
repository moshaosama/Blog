import React from "react";
import HeaderForSection from "../Atomic/HeaderForSection";
import type { SectionsProps } from "../../Types/Sections";
import MediaQueryStyle from "../../Modules/MediaQuery.module.css";
import { cn } from "../../lib/cn";
import { useTheme } from "../../Context/ThemeContext";
import { Link } from "react-router";

const Sections = ({
  GridColumns,
  Title,
  children,
  isAllDataBtn,
}: SectionsProps) => {
  const { section } = MediaQueryStyle;
  const { theme } = useTheme();
  return (
    <section>
      <div className="flex items-center justify-between">
        <HeaderForSection Title={Title} />
        {isAllDataBtn ? (
          <Link
            to={"/categories/all"}
            className={cn(
              "underline mr-16 text-xl cursor-pointer",
              theme == "light" ? "text-[#7b00d3]" : "text-[#ffdb4d]"
            )}
          >
            view all
          </Link>
        ) : null}
      </div>
      <div
        className={cn("grid gap-y-10", section)}
        style={{ gridTemplateColumns: `repeat(${GridColumns}, 1fr)` }}
      >
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child);
        })}
      </div>
    </section>
  );
};

export default Sections;
