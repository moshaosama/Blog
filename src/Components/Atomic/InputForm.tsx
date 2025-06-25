import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

const InputForm = () => {
  const { theme } = useTheme();
  return (
    <input
      type="text"
      placeholder="Enter your email"
      className={cn(
        "border-b-2 focus:outline-none text-gray-200 border-b-gray-50 w-96 px-2",
        theme === "light"
          ? "text-black border-b-black"
          : "text-gray-200 border-b-gray-50"
      )}
    />
  );
};

export default InputForm;
