import { LogoBrand } from "../Atomic/LogoBrand";
import LinkSocialMedia from "../molecules/LinkSocialMedia";
import NavbarLinks from "../molecules/NavbarLinks";

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-10 my-5">
      <LogoBrand />
      <NavbarLinks />
      <LinkSocialMedia />
    </header>
  );
};

export default Header;
