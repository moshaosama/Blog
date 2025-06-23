import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";
import CopyRight from "../Atomic/CopyRight";
import TextFooter from "../Atomic/TextFooter";
import Form from "../molecules/Form";
import LinkSocialMedia from "../molecules/LinkSocialMedia";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={cn(
        theme === "light"
          ? "bg-[#1b1b1b] text-white"
          : "bg-[#ffdb4d] text-black",
        "mx-10 py-10 mt-20 rounded-xl flex flex-col pb-2 items-center gap-8"
      )}
    >
      <TextFooter />
      <Form />
      <LinkSocialMedia />
      <CopyRight />
    </footer>
  );
};

export default Footer;
