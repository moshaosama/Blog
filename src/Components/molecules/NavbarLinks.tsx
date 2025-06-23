import { useOpenSidebar } from "../../Context/OpenSidebar";
import { cn } from "../../lib/cn";
import ToggleThemeFactory from "../../Utils/ToggleThemeFactory";
import LinkHeader from "../Atomic/LinkHeader";

const NavbarLinks = () => {
  const { isOpen } = useOpenSidebar();
  return (
    <div
      className={cn(
        "fixed w-full flex justify-center z-50 transition-all duration-700 "
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4 border-1 max-sm:w-64 w-full border-black max-sm:px-6 px-10 max-sm:mr-10 bg-[#ffffffe3] py-3 rounded-full",
          isOpen ? "" : "hidden"
        )}
      >
        <LinkHeader children="Home" To="/" />
        <LinkHeader children="About" To="/about" />
        <LinkHeader children="Contact" To="/contact" />
        <div className="bg-white p-1 rounded-full">
          <ToggleThemeFactory />
        </div>
      </div>
    </div>
  );
};

export default NavbarLinks;
