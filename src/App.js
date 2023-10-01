import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
 
const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    //Make an API call and send the user name & password
    const data = {
      name: "Shruti Jai",
    }
    setUserName(data.name);
  }, [])

    return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName}}>
          <div className="app">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </UserContext.Provider>
      </Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      }, 
      {
        path: "/about",
        element: <About />,
      }, 
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error /> 
  }, 
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={ appRouter } />)