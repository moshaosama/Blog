import { Link } from "react-router";
import { useTheme } from "../../Context/ThemeContext";
import { Categroies } from "../../Data/Categories";
import useSetActiveElement from "../../Hooks/useSetActiveElement";
import { cn } from "../../lib/cn";

export const CategoryData = () => {
  const { theme } = useTheme();
  const { handleClick } = useSetActiveElement();
  return (
    <div className="grid grid-cols-10 max-sm:grid-cols-2 max-sm:gap-5">
      {Categroies?.map((data) => (
        <div
          onClick={(e: any) => handleClick(e, data.name)}
          className={cn(
            "border-2 w-40 mt-5 flex justify-center rounded-4xl cursor-pointer transition-all duration-500 py-2",
            theme == "light"
              ? "hover:bg-black hover:text-white border-black text-black"
              : " hover:bg-white hover:text-black border-white text-white"
          )}
        >
          <Link to={`/categories/${data.name.slice(1)}`}>{data.name}</Link>
        </div>
      ))}
    </div>
  );
};
