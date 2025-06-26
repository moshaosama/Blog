import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

const DatePost = ({ Date }: { Date: string }) => {
  const { theme } = useTheme();
  return (
    <h1
      className={cn(
        " text-xl",
        theme === "light" ? "text-[#747474]" : "text-[#747474]"
      )}
    >
      {Date}
    </h1>
  );
};

export default DatePost;
