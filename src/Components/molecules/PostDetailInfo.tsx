import type { PostDetailInfoProps } from "../../Types/FeaturePostDetailInfo";
import BoxImage from "../Atomic/BoxImage";
import DatePost from "../Atomic/DatePost";
import HeaderPostBlog from "../Atomic/HeaderPostBlog";
import { TextAnimation } from "../Atomic/TextAnimation";

const PostDetailInfo = ({
  ImageUrl,
  Height,
  Width,
  Header,
  textAnimation,
}: PostDetailInfoProps) => {
  return (
    <div className="flex gap-5 items-center">
      <BoxImage
        Height={Height}
        ImageURL={ImageUrl}
        Width={Width}
        isText={false}
      />
      <div>
        <HeaderPostBlog Title={Header} />
        <TextAnimation Title={textAnimation} fontSize="20px" />
        <DatePost />
      </div>
    </div>
  );
};

export default PostDetailInfo;
