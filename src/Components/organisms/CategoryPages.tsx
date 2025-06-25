import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";
import { CategoryData } from "../molecules/CategoryData";
import CategoryDetails from "../molecules/CategoryDetails";

const CategoryPages = () => {
  const { theme } = useTheme();
  return (
    <div className="mx-20 mt-10">
      <CategoryDetails />
      <hr
        className={cn(
          "mt-5 border-none h-0.5",
          theme === "light" ? "bg-black" : "bg-white"
        )}
      />
      <CategoryData />
      <hr
        className={cn(
          "mt-5 border-none h-0.5",
          theme === "light" ? "bg-black" : "bg-white"
        )}
      />
    </div>
  );
};

export default CategoryPages;
