import type { TextAnimationProps } from "../../Types/TextAnimation.type";

export const TextAnimation = ({ Title, fontSize }: TextAnimationProps) => {
  return (
    <div className="group cursor-pointer">
      <h1 className="font-bold" style={{ fontSize: fontSize }}>
        {Title}
      </h1>
      <hr className="h-2 transition-all duration-1000 w-0 group-hover:w-full mt-1 rounded-xl border-none bg-[#7b00d3] " />
    </div>
  );
};
