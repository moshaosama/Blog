import { FaLinkedin } from "react-icons/fa";
import LinkHeader from "../Atomic/LinkHeader";
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa6";
import { cn } from "../../lib/cn";
import { useTheme } from "../../Context/ThemeContext";

const LinkSocialMedia = () => {
  const { theme } = useTheme();
  return (
    <div className="flex gap-4 max-sm:hidden">
      <LinkHeader
        children={
          <FaLinkedin
            size={30}
            className={cn(theme === "light" ? "text-black" : "text-white")}
          />
        }
        To=""
      />
      <LinkHeader
        children={
          <FaGithub
            size={30}
            className={cn(theme === "light" ? "text-black" : "text-white")}
          />
        }
        To=""
      />
      <LinkHeader
        children={
          <FaTwitter
            size={30}
            className={cn(theme === "light" ? "text-black" : "text-white")}
          />
        }
        To=""
      />
      <LinkHeader
        children={
          <FaDribbble
            size={30}
            className={cn(theme === "light" ? "text-black" : "text-white")}
          />
        }
        To=""
      />
    </div>
  );
};

export default LinkSocialMedia;
