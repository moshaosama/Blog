import React from "react";
import HeaderForSection from "../Atomic/HeaderForSection";
import type { SectionsProps } from "../../Types/Sections";

const Sections = ({ GridColumns, Title, children }: SectionsProps) => {
  return (
    <section>
      <HeaderForSection Title={Title} />
      <div
        className="grid gap-y-10"
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
