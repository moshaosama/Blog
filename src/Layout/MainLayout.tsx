import { Outlet } from "react-router";
import Header from "../Components/organisms/Header";
import { cn } from "../lib/cn";
import { useTheme } from "../Context/ThemeContext";
import Footer from "../Components/organisms/Footer";

const MainLayout = () => {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        theme === "light" ? "bg-white" : "bg-[#1b1b1b]",
        "transition-all duration-500"
      )}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
