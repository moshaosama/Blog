import { Link } from "react-router";
import { useTheme } from "../../Context/ThemeContext";
import useGetBlogs from "../../Hooks/useGetBlogs";
import { cn } from "../../lib/cn";

const CategoryInformationTable = () => {
  const { BlogById } = useGetBlogs();
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        theme === "light" ? "bg-[#7b00d3]" : "bg-[#ffdb4d]",
        "py-8 rounded-xl flex justify-around"
      )}
    >
      <div className="flex items-center gap-96 max-sm:flex-col max-sm:gap-10">
        <h1
          className={cn(
            "text-2xl  font-semibold",
            theme === "light" ? "text-white" : "text-black"
          )}
        >
          {BlogById.result[0]?.date}
        </h1>
        <h1
          className={cn(
            "text-2xl  font-semibold",
            theme === "light" ? "text-white" : "text-black"
          )}
        >
          4899 views
        </h1>
      </div>
      <div className="flex items-center gap-96 max-sm:flex-col max-sm:gap-10">
        <h1
          className={cn(
            "text-2xl  font-semibold",
            theme === "light" ? "text-white" : "text-black"
          )}
        >
          9 min read
        </h1>
        <Link
          to={`/categories/${BlogById.result[0]?.category}`}
          className={cn(
            "text-2xl  font-semibold",
            theme === "light" ? "text-white" : "text-black"
          )}
        >
          {"#" + BlogById.result[0]?.category}
        </Link>
      </div>
    </div>
  );
};

export default CategoryInformationTable;
