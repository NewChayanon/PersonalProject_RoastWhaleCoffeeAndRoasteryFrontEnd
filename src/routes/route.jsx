import { createBrowserRouter } from "react-router-dom";

import { RouterProvider } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import CoffeePage from "../pages/CoffeePage";
import ToolPage from "../pages/ToolPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { StockContextProvider } from "../contexts/StockContext";
import CheckOutPage from "../pages/ChackOutPage";
import StatusOrderUserPage from "../pages/StatusOrderUserPage";
import OrderPage from "../pages/OrderPage";
import ProductInfo from "../pages/ProductInfo";
import ProtectedRoute from "../features/authentication/ProtectedRoute";
import ProtectedRouteAdmin from "../features/authentication/ProtectedRouteAdmin";
import ProtectedRouteUser from "../features/authentication/ProtectedRouteUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/product-coffees",
        element: (
          <StockContextProvider>
            <CoffeePage />
          </StockContextProvider>
        ),
      },
      {
        path: "/product-tools",
        element: (
          <StockContextProvider>
            <ToolPage />
          </StockContextProvider>
        ),
      },
      {
        path: "/carts",
        element: (
          <ProtectedRouteUser>
            <CartPage />
          </ProtectedRouteUser>
        ),
      },
      {
        path: "/check-out",
        element: (
          <ProtectedRouteUser>
            <CheckOutPage />
          </ProtectedRouteUser>
        ),
      },
      {
        path: "/shopping-list",
        element: (
          <ProtectedRouteUser>
            <StatusOrderUserPage />
          </ProtectedRouteUser>
        ),
      },
      {
        path: "/order",
        element: (
          <ProtectedRouteAdmin>
            <OrderPage />
          </ProtectedRouteAdmin>
        ),
      },
      { path: "/product/:productId", element: <ProductInfo /> },
    ],
  },
  { path: "/logins", element: <LoginPage /> },
  { path: "/registers", element: <RegisterPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
