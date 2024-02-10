import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/page/Body";
import Faq from "./src/components/page/Faq";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/page/Error";
import RestaurantMenu from "./src/components/page/RestaurantMenu";
import Contact from "./src/components/page/Contact";
import Shimmer from "./src/components/Shimmer";

const Instamart = lazy(() => import("./src/components/page/Instamart"));
const Profile = lazy(() => import("./src/components/page/Profile"));

const Container = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/frequent-questions",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<Shimmer />}>
                {" "}
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
