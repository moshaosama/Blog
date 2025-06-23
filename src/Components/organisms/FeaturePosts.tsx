import HeaderForSection from "../Atomic/HeaderForSection";
import { TextAnimation } from "../Atomic/TextAnimation";
import Article_Feature_Posts from "../molecules/Featured_Posts";
import PostDetailInfo from "../molecules/PostDetailInfo";
import Sections from "../templates/Sections";

const FeaturePosts = () => {
  return (
    <>
      <Sections
        GridColumns={2}
        Title={<HeaderForSection Title="Featured Posts" />}
      >
        <Article_Feature_Posts />
        <div className="flex flex-col justify-between">
          <PostDetailInfo
            Header="productivity"
            Height="15pc"
            Width="fit-content"
            ImageUrl="emile-perron-xrVDYZRGdw4-unsplash-850d2f93.webp"
            flexDirection="row"
            textAnimation={
              <TextAnimation
                Title={
                  "Automating Repetitive Tasks: Productivity Hacks for Developers"
                }
                fontSize="20px"
              />
            }
          />
          <PostDetailInfo
            Header="productivity"
            Height="15pc"
            Width="fit-content"
            ImageUrl="emile-perron-xrVDYZRGdw4-unsplash-850d2f93.webp"
            flexDirection="row"
            textAnimation={
              <TextAnimation
                Title={
                  "Automating Repetitive Tasks: Productivity Hacks for Developers"
                }
                fontSize="20px"
              />
            }
          />
        </div>
      </Sections>
    </>
  );
};

export default FeaturePosts;
