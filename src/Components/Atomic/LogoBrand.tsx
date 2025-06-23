import { useTheme } from "../../Context/ThemeContext";
import { cn } from "../../lib/cn";

export const LogoBrand = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <img
        src="profile-img.webp"
        alt="profileImage.png"
        className={cn(
          "w-16 border-1 rounded-full",
          theme === "light" ? "border-black" : "border-white"
        )}
      />
      <h1 className={cn(theme === "light" ? "text-black" : "text-white")}>
        Mo4aBlogs
      </h1>
    </div>
  );
};
