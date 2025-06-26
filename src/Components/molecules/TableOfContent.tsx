import { IoMdArrowDropright } from "react-icons/io";
import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";
import useOpenTabel from "../../Hooks/useOpenTabel";

const TableOfContent = () => {
  const { theme } = useTheme();
  const { isOpenTable, handleTriggerOpenTable } = useOpenTabel();
  return (
    <div
      onClick={handleTriggerOpenTable}
      className={cn(
        "border-1 overflow-hidden flex flex-col sticky top-5 transition-all duration-500 w-[70pc] max-sm:w-full py-3 px-5 rounded-lg cursor-pointer",
        theme == "light" ? "border-black" : "border-white",
        isOpenTable ? "h-[42pc]" : "h-14"
      )}
    >
      {/* h-14 */}
      <div className="flex items-center" onClick={handleTriggerOpenTable}>
        <IoMdArrowDropright
          color={theme === "light" ? "black" : "white"}
          size={30}
        />
        <h1
          className={cn(
            "text-xl font-semibold",
            theme === "light" ? "text-black" : "text-white"
          )}
        >
          Table Of Content
        </h1>
      </div>

      <div className="m-4 mt-7 flex flex-col gap-2">
        <hr />
        <div className="flex flex-col mt-2 gap-3">
          <a href="#What_Expect" className="hover:underline">
            What to expect from here on out
          </a>
          <li>
            <a href="#Easy" className="hover:underline mx-5">
              Typography should be easy
            </a>
          </li>
        </div>

        <hr />
        <div className="flex flex-col mt-2 gap-3">
          <a href="" className="hover:underline">
            What if we stack headings?
          </a>
          <li>
            <a href="" className="hover:underline mx-5">
              We should make sure that looks good, too.
            </a>
          </li>
          <li>
            <a href="" className="hover:underline mx-5">
              When a heading comes after a paragraph …
            </a>
          </li>
        </div>

        <hr />
        <div className="flex flex-col mt-2 gap-3">
          <a href="" className="hover:underline">
            Code should look okay by default.
          </a>
          <li>
            <a href="" className="hover:underline mx-5">
              What about nested lists?
            </a>
          </li>
        </div>

        <hr />
        <div className="flex flex-col mt-2 gap-3">
          <a href="" className="hover:underline">
            There are other elements we need to style
          </a>
          <li>
            <a href="" className="hover:underline mx-5">
              Sometimes I even use code in headings
            </a>
          </li>
          <li>
            <a href="" className="hover:underline mx-5">
              We haven't used an h4 yet
            </a>
          </li>
          <li>
            <a href="" className="hover:underline mx-5">
              We still need to think about stacked headings though.
            </a>
          </li>
          <li>
            <a href="" className="hover:underline mx-5">
              Let's make sure we don't screw that up with h4 elements, either.
            </a>
          </li>

          <hr />
          <div className="flex flex-col mt-2 gap-3">
            <a href="" className="hover:underline">
              GitHub Flavored Markdown
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
