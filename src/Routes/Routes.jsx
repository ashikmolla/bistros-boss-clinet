
import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUP/SignUP";
import PrivatRoute from "./PrivatRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashbord/MyCart/MyCart";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      }, {
        path: 'order/:category',
        element: <Order></Order>
      }, {
        path: 'login',
        element: <Login></Login>
      }, {
        path: 'signUp',
        element: <SignUP></SignUP>
      }, {
        path: 'secret',
        element: <PrivatRoute><Secret></Secret></PrivatRoute>
      }
    ]
  }, {
    path: 'dashboard',
    element: <PrivatRoute><Dashboard/></PrivatRoute>,
    children: [
      {
        path: 'dashboard/myCart',
        element: <MyCart></MyCart>,
      },
      {
        path: 'dashboard/allUsers',
        element: <AllUsers></AllUsers>,
      }
    ]
  }
])