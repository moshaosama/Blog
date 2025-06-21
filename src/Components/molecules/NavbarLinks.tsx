import LinkHeader from "../Atomic/LinkHeader";

const NavbarLinks = () => {
  return (
    <div className="flex gap-4 border-1 border-black px-10 py-3 rounded-full">
      <LinkHeader children="Home" To="/" />
      <LinkHeader children="About" To="/about" />
      <LinkHeader children="Contact" To="/contact" />
    </div>
  );
};

export default NavbarLinks;
