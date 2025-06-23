import { cn } from "../../lib/cn";
import type { BoxImageProps } from "../../Types/BoxImage.type";

const BoxImage = ({
  ImageURL,
  Width,
  children,
  isText,
  Height,
}: BoxImageProps) => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src={ImageURL}
          alt="Image.png"
          className={cn(
            `object-cover rounded-2xl hover:scale-110 transition-all duration-700 group`
          )}
          style={{ width: Width, height: Height }}
        />
        <div
          className="absolute top-0 bg-[#00000070] rounded-2xl h-full"
          style={{ width: Width }}
        ></div>
        <div className="absolute bottom-20 left-20">
          {isText && <div className="text-white">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default BoxImage;
