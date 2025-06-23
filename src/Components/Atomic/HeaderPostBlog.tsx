import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

const HeaderPostBlog = ({ Title }: { Title: string }) => {
  const { theme } = useTheme();
  return (
    <div>
      <h1
        className={cn(theme === "light" ? "text-[#7b00d3]" : "text-[#ffdb4d]")}
      >
        {Title}
      </h1>
    </div>
  );
};

export default HeaderPostBlog;
