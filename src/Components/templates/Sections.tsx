import React from "react";
import HeaderForSection from "../Atomic/HeaderForSection";
import type { SectionsProps } from "../../Types/Sections";
import MediaQueryStyle from "../../Modules/MediaQuery.module.css";
import { cn } from "../../lib/cn";

const Sections = ({ GridColumns, Title, children }: SectionsProps) => {
  const { section } = MediaQueryStyle;
  return (
    <section>
      <HeaderForSection Title={Title} />
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
