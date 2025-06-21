import { FaLinkedin } from "react-icons/fa";
import LinkHeader from "../Atomic/LinkHeader";
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa6";

const LinkSocialMedia = () => {
  return (
    <div className="flex gap-4">
      <LinkHeader children={<FaLinkedin size={30} />} To="" />
      <LinkHeader children={<FaGithub size={30} />} To="" />
      <LinkHeader children={<FaTwitter size={30} />} To="" />
      <LinkHeader children={<FaDribbble size={30} />} To="" />
    </div>
  );
};

export default LinkSocialMedia;
