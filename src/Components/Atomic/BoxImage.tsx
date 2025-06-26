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
              "bg-[#00000070] rounded-2xl h-full absolute top-0",
              BoxImage
            )}
            style={{ width: Width }}
          ></div>
        )}
        <div>
          {isText && <div className="text-white">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default BoxImage;
