import { useTheme } from "../../Context/ThemeContext";
import { Categroies } from "../../Data/Categories";
import useSetActiveElement from "../../Hooks/useSetActiveElement";
import { cn } from "../../lib/cn";

export const CategoryData = () => {
  const { theme } = useTheme();
  const { handleClick } = useSetActiveElement();
  return (
    <div className="flex gap-2">
      {Categroies?.map((data) => (
        <button
          value={data.name}
          onClick={handleClick}
          className={cn(
            "border-2 w-40 mt-5 rounded-4xl cursor-pointer transition-all duration-500 py-2",
            theme == "light"
              ? "hover:bg-black hover:text-white border-black text-black"
              : " hover:bg-white hover:text-black border-white text-white"
          )}
        >
          {data.name}
        </button>
      ))}
    </div>
  );
};
