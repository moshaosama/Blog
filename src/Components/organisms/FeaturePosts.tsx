import { Link } from "react-router";
import { TextAnimation } from "../Atomic/TextAnimation";
import Article_Feature_Posts from "../molecules/Article_Feature_Posts";
import PostDetailInfo from "../molecules/PostDetailInfo";
import Sections from "../templates/Sections";

const FeaturePosts = () => {
  return (
    <>
      <Sections isAllDataBtn={false} GridColumns={2} Title={"Featured Posts"}>
        <Article_Feature_Posts />
        <div className="flex flex-col justify-between">
          <Link to={"/5"}>
            <PostDetailInfo
              Header="css"
              Height="15pc"
              Width="30pc"
              ImageUrl="emile-perron-xrVDYZRGdw4-unsplash-850d2f93.webp"
              flexDirection="row"
              textAnimation={
                <TextAnimation
                  Title={"Mastering CSS Grid Layout: A Comprehensive Guide"}
                  fontSize="20px"
                />
              }
              Date="May 08, 2024"
            />
          </Link>
          <Link to={"/11"}>
            <PostDetailInfo
              Header="productivity"
              Height="15pc"
              Width="30pc"
              ImageUrl="roman-synkevych-vXInUOv1n84-unsplash-133222a0 (1).webp"
              flexDirection="row"
              textAnimation={
                <TextAnimation
                  Title={"10 Essential Web Development Tools for Productivity"}
                  fontSize="20px"
                />
              }
              Date="November 12, 2022"
            />
          </Link>
        </div>
      </Sections>
    </>
  );
};

export default FeaturePosts;
