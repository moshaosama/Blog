import BoxImage from "../Atomic/BoxImage";
import ButtonTags from "../Atomic/ButtonTags";
import { TextAnimation } from "../Atomic/TextAnimation";

const Article_Feature_Posts = () => {
  return (
    <div className="mx-10 max-sm:mx-2">
      <BoxImage
        Height="50%"
        ImageURL="paul-esch-laurent-oZMUrWFHOB4-unsplash-1e203eea.webp"
        Width="100%"
        isText={true}
      >
        <div className="flex flex-col gap-4">
          <ButtonTags BackGround="black" Title="Javascript" />
          <TextAnimation
            fontSize="25px"
            Title="The Power of JavaScript Frameworks: Angular vs. React vs. Vue.js"
          />
        </div>
      </BoxImage>
    </div>
  );
};

export default Article_Feature_Posts;
