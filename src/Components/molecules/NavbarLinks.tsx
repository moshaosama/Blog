import ToggleThemeFactory from "../../Utils/ToggleThemeFactory";
import LinkHeader from "../Atomic/LinkHeader";

const NavbarLinks = () => {
  return (
    <div className="fixed w-full flex justify-center z-50 ">
      <div className="flex items-center gap-4 border-1  border-black px-10 bg-[#ffffff80] py-3 rounded-full">
        <LinkHeader children="Home" To="/" />
        <LinkHeader children="About" To="/about" />
        <LinkHeader children="Contact" To="/contact" />
        <div>
          <ToggleThemeFactory />
        </div>
      </div>
    </div>
  );
};

export default NavbarLinks;
