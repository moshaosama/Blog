import { useTheme } from "../Context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleThemeFactory = () => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <div onClick={handleToggleTheme} className="cursor-pointer">
      {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
    </div>
  );
};

export default ToggleThemeFactory;
