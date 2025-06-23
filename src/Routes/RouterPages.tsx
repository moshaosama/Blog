import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Pages/Home";

const RouterPages = () => {
  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Routes}></RouterProvider>;
};

export default RouterPages;
