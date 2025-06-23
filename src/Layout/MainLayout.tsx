import { Outlet } from "react-router";
import Header from "../Components/organisms/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
