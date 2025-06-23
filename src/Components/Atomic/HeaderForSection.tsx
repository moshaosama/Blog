import type { ReactElement } from "react";

const HeaderForSection = ({ Title }: { Title: string | ReactElement }) => {
  return (
    <div className="mx-10 my-20">
      <h1 className="font-bold text-6xl">{Title}</h1>
    </div>
  );
};

export default HeaderForSection;
