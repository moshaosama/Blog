import { CgMenu } from "react-icons/cg";
import { LogoBrand } from "../Atomic/LogoBrand";
import LinkSocialMedia from "../molecules/LinkSocialMedia";
import NavbarLinks from "../molecules/NavbarLinks";
import { useOpenSidebar } from "../../Context/OpenSidebar";
import { FaX } from "react-icons/fa6";

const Header = () => {
  const { handleOpenSidebar, isOpen, handleCloseSidebar } = useOpenSidebar();
  return (
    <header className="flex justify-between items-center mx-10 max-sm:mx-3 py-5">
      <LogoBrand />
      <NavbarLinks />
      <LinkSocialMedia />
      <div className="sm:hidden">
        {isOpen ? (
          <FaX size={32} onClick={handleCloseSidebar} />
        ) : (
          <CgMenu size={32} onClick={handleOpenSidebar} />
        )}
      </div>
    </header>
  );
};

export default Header;
