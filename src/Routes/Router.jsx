import { createBrowserRouter } from "react-router-dom";
import Recent from "../Component/Recent";
import Main from "../Layout/Main";
import Home from "../Page/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/recent",
                element: <Recent></Recent>
            },
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    },

])