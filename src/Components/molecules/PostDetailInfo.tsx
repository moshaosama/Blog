import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";
import type { PostDetailInfoProps } from "../../Types/FeaturePostDetailInfo";
import BoxImage from "../Atomic/BoxImage";
import DatePost from "../Atomic/DatePost";
import HeaderPostBlog from "../Atomic/HeaderPostBlog";
import { TextAnimation } from "../Atomic/TextAnimation";
import MediaQueryStyle from "../../Modules/MediaQuery.module.css";

const PostDetailInfo = ({
  ImageUrl,
  Height,
  flexDirection = "row",
  Width,
  Header,
  textAnimation,
}: PostDetailInfoProps) => {
  const { theme } = useTheme();
  const { PostDetail } = MediaQueryStyle;
  return (
    <div
      className={cn(
        "flex gap-5 max-sm:mx-2 group overflow-hidden cursor-pointer",
        PostDetail
      )}
      style={{ flexDirection: flexDirection }}
    >
      <div className="group-hover:scale-105 transition-all duration-700">
        <BoxImage
          Height={Height}
          ImageURL={ImageUrl}
          Width={Width}
          isText={false}
        />
      </div>
      <div>
        <HeaderPostBlog Title={Header} />
        <div className={cn(theme === "light" ? "text-black" : "text-white")}>
          <TextAnimation Title={textAnimation} fontSize="20px" />
        </div>
        <DatePost />
      </div>
    </div>
  );
};

export default PostDetailInfo;
