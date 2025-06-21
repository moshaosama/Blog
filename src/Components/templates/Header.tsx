import { LogoBrand } from "../Atomic/LogoBrand";
import LinkSocialMedia from "../molecules/LinkSocialMedia";
import NavbarLinks from "../molecules/NavbarLinks";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-10 my-5">
      <LogoBrand />
      <NavbarLinks />
      <LinkSocialMedia />
    </div>
  );
};

export default Header;
