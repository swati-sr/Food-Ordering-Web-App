import React, { lazy, Suspense, useContext, useState } from "react";
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
import userContext from "./src/components/utils/userContext";
import store from "./src/components/utils/store";
import { Provider } from "react-redux";
import Cart from "./src/components/page/Cart";

const Instamart = lazy(() => import("./src/components/page/Instamart"));
const Profile = lazy(() => import("./src/components/page/Profile"));

const Container = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Swati Srivastav",
    email: "swati.srivastav@sde@gmail.com",
  });
  const { user } = useContext(userContext);

  return (
    // <userContext.Provider value={{ user: userInfo, setUser: setUserInfo }}>
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
    // </userContext.Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
