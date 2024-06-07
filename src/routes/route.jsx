import { createBrowserRouter } from "react-router-dom";

import { RouterProvider } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import CoffeePage from "../pages/CoffeePage";
import ToolPage from "../pages/ToolPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([

    { path: "/", 
     element: <MainContainer /> ,
     children:[
        {path:"/",element:<HomePage/>},
        {path:'/product-coffees',element:<CoffeePage/>},
        {path:'/product-tools',element:<ToolPage/>},
        {path:'/carts',element:<CartPage/>},
        {path:'/logins',element:"/logins"},
        {path:'/registers',element:"/registers"},
     ]

    }

]);

export default function Router() {
  return <RouterProvider router={router} />;
}
