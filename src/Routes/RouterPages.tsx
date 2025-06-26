import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import { Contact } from "../Components/Pages/Contact";
import Categories from "../Components/Pages/Categories";
import DisplayDataBlogs from "../Components/templates/DisplayDataBlogs";
import { CategoryId } from "../Components/Pages/CategoryId";

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
        {
          path: "/:blog_id",
          element: <CategoryId />,
        },
        {
          path: "/categories",
          element: <Categories />,
          children: [
            {
              index: true,
            },
            {
              path: ":category_id",
              element: <DisplayDataBlogs />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={Routes}></RouterProvider>;
};

export default RouterPages;
