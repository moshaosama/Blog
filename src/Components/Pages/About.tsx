import { Link } from "react-router";
import { useTheme } from "../../Context/ThemeContext";
import { Skills } from "../../Data/Skills";
import { cn } from "../../lib/cn";


import DisplaySkills from "../organisms/DisplaySkills";
import Hero_Pages from "../templates/Hero_Pages";

const About = () => {
  const { theme } = useTheme();
  return (
    <>
      
      <Hero_Pages ImageUrl="/character.webp">
        <h1 className="text-7xl max-sm:text-4xl font-bold w-[50pc] max-sm:w-full max-sm:text-center">
          Dream Big, Work Hard, Achieve More!
        </h1>
        <p className="text-md w-[50pc] max-sm:w-full max-sm:text-center">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I'm A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact—One Pixel At A Time.
        </p>
      </Hero_Pages>
      <DisplaySkills Skills={Skills} />
      <h1
        className={cn(
          "mx-20 text-3xl font-bold mt-10",
          theme === "light" ? "text-black" : " text-white"
        )}
      >
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link
          to={"/contact"}
          className="underline font-semibold cursor-pointer"
        >
          here
        </Link>{" "}
        and let's make it happen.
      </h1>
    </>
  );
};

export default About;
