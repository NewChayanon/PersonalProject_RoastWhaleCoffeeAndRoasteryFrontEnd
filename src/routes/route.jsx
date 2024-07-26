import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { lazy } from "react";
const MainContainer = lazy(() => import("../layouts/MainContainer"));
const HomePage = lazy(() => import("../pages/HomePage"));
const CoffeePage = lazy(() => import("../pages/CoffeePage"));
const ToolPage = lazy(() => import("../pages/ToolPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const { StockContextProvider } = lazy(() => import("../contexts/StockContext"));
const CheckOutPage = lazy(() => import("../pages/ChackOutPage"));
const StatusOrderUserPage = lazy(() => import("../pages/StatusOrderUserPage"));
const OrderPage = lazy(() => import("../pages/OrderPage"));
const ProductInfo = lazy(() => import("../pages/ProductInfo"));
const ProtectedRouteAdmin = lazy(() => import("../features/authentication/ProtectedRouteAdmin"));
const ProtectedRouteUser = lazy(() => import("../features/authentication/ProtectedRouteUser"));

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
