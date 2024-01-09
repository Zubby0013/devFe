import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout";
import HomeScreen from "../pages/HomeScreen";
import About from "../pages/About";
import Contant from "../pages/Contant";

export const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            },
            {
                index: true,
                path: '/about',
                element: <About/>
            },
            {
                index: true,
                path: '/contact',
                element: <Contant/>
            },
        ]
    }
]);