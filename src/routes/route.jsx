import { createBrowserRouter } from "react-router-dom";

import { RouterProvider } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";


const router = createBrowserRouter([
    { path:"/",element:(<MainContainer/>)}
])

export default function Router(){
    return <RouterProvider router={router}/>
}