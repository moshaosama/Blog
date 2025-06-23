import BoxImage from "../Atomic/BoxImage";
import ButtonTags from "../Atomic/ButtonTags";
import { TextAnimation } from "../Atomic/TextAnimation";

const Hero = () => {
  return (
    <div className="mx-10">
      <BoxImage
        ImageURL="charlesdeluvio-cZr2sgaxy3Q-unsplash-113acabc.webp"
        Width="100%"
        Height="50pc"
        isText={true}
      >
        <div className="flex flex-col gap-10">
          <ButtonTags Title="Web Development" BackGround="black" />
          <div>
            <TextAnimation
              fontSize="2pc"
              Title="Building Progressive Web Apps: Bridging the Gap Between Web and Mobile"
            />
            <p className="text-2xl">
              Integrating mindfulness practices helps developers cultivate
              present-moment awareness, fostering focus, problem-solving, and
              work-life balance.
            </p>
          </div>
        </div>
      </BoxImage>
    </div>
  );
};

export default Hero;
