import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Courses from "../../Pages/Courses/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";
import Faq from "../../Pages/Faq/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Footer from "../../Pages/Shared/Footer/Footer";
import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
                
            },
            {
                path: 'courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://imam-it-foundation-server-site.vercel.app/item`)
            },
            {
                path: 'courses/:_id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({params}) => fetch(`https://imam-it-foundation-server-site.vercel.app/item/${params._id}`)
            },
            {
                path: '/checkout',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/leftsitenav',
                element: <LeftSideNav></LeftSideNav>,
                loader: () => fetch(`tutorials.json`)
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]
    }
])