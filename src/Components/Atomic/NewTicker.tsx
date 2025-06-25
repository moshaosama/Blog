import Marquee from "react-fast-marquee";
import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

interface NewTickerProps {
  data: { title: string; id?: string | number }[];
}

const NewTicker = ({ data }: NewTickerProps) => {
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
      pauseOnHover
    >
      <div className="flex gap-10">
        {data.map((item) => (
          <h1 key={item.id || item.title} className="text-xl font-semibold">
            {item.title}
          </h1>
        ))}
      </div>
    </Marquee>
  );
};

export default NewTicker;
