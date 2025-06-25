import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import { Contact } from "../Components/Pages/Contact";

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
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Routes}></RouterProvider>;
};

export default RouterPages;
