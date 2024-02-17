import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            { 
                path: '/home',
                element: <HomePage/>
            },
            { 
                path: '/about',
                element: <AboutPage/>
            },
            { 
                path: '/contact',
                element: <ContactPage/>
            },
            { 
                path: '/*',
                element: <Navigate to={'/home'}/>
            }
        ]
    }
])