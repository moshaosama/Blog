import { cn } from "../../lib/cn";
import type { ButtonTagsProps } from "../../Types/ButtonTags.type";

const ButtonTags = ({ BackGround, Title }: ButtonTagsProps) => {
  return (
    <div>
      <button
        className={cn(
          `text-white cursor-pointer w-52 py-3 border-1 hover:scale-105 transition-all duration-500 border-white text-center rounded-full`
        )}
        style={{ backgroundColor: BackGround }}
      >
        {Title}
      </button>
    </div>
  );
};

export default ButtonTags;
