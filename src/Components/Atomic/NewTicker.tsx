import Marquee from "react-fast-marquee";
import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

const NewTicker = ({ data }: { data: any[] }) => {
  const { theme } = useTheme();
  return (
    <Marquee
      className={cn(
        "py-4",
        theme === "light"
          ? "bg-[#7b00d3] text-white"
          : "bg-[#ffdb4d] text-black"
      )}
      speed={200}
    >
      <div className="flex gap-5">
        {data.map((data: any) => (
          <h1 className="text-xl font-semibold ">{data.title}</h1>
        ))}
      </div>
    </Marquee>
  );
};

export default NewTicker;
