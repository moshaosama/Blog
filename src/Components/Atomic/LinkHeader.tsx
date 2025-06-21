import { Link } from "react-router";
import type { LinkHeaderProps } from "../../Types/LinkHeader.type";

const LinkHeader = ({ children, To }: LinkHeaderProps) => {
  return <Link to={To as string}>{children}</Link>;
};

export default LinkHeader;
