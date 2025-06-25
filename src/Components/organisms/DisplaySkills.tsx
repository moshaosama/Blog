import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

const DisplaySkills = ({ Skills }: { Skills: any[] }) => {
  const { theme } = useTheme();
  return (
    <>
      <div className="mx-20 flex flex-col gap-5 mt-20">
        <h1
          className={cn(
            theme === "light" ? "text-[#7b00d3]" : "text-[#ffdb4d]",
            "text-4xl font-semibold"
          )}
        >
          I'm comfortable in...
        </h1>
        <div
          className={cn(
            "grid transition-all duration-300 grid-cols-7 gap-5",
            theme === "light" ? "gap-x-8" : " gap-x-10"
          )}
        >
          {Skills?.map((el) => (
            <div
              className={cn(
                "border-2 p-7 text-2xl hover:scale-105",
                theme === "light"
                  ? "border-black text-black"
                  : "border-white text-white"
              )}
            >
              <h1>{el.skill}</h1>
            </div>
          ))}
        </div>
      </div>
      <hr
        className={cn(
          "mt-20 border-none h-0.5",
          theme === "light" ? "bg-black" : "bg-white"
        )}
      />
    </>
  );
};

export default DisplaySkills;
