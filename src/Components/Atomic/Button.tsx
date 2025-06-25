import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

const Button = ({ Title }: { Title: string }) => {
  const { theme } = useTheme();
  return (
    <button
      className={cn(
        "w-32 py-1 rounded-md bg-white text-black",
        theme == "light" ? "bg-black text-white" : "bg-white text-black"
      )}
      value={Title}
    >
      {Title}
    </button>
  );
};

export default Button;
