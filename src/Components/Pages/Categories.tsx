import { Outlet } from "react-router";
import CategoryPages from "../organisms/CategoryPages";

const Categories = () => {
  return (
    <>
      <CategoryPages />
      <Outlet />
    </>
  );
};

export default Categories;
