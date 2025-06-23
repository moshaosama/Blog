import { cn } from "../../lib/cn";
import type { BoxImageProps } from "../../Types/BoxImage.type";
import MediaQueryStyle from "../../Modules/MediaQuery.module.css";

const BoxImage = ({
  ImageURL,
  Width,
  children,
  isText,
  Height,
}: BoxImageProps) => {
  const { BoxImage } = MediaQueryStyle;
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src={ImageURL}
          alt="Image.png"
          className={cn(
            `object-cover rounded-2xl max-sm:w-full max-sm:h-full`,
            BoxImage
          )}
          style={{ width: Width, height: Height }}
        />
        {isText && (
          <div
            className={cn(
              "absolute top-0 bg-[#00000070] rounded-2xl h-full",
              BoxImage
            )}
            style={{ width: Width }}
          ></div>
        )}
        <div className="absolute bottom-20 max-sm:bottom-2 left-20 max-sm:left-3">
          {isText && <div className="text-white">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default BoxImage;
