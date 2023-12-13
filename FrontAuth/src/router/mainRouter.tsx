import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/Home/HomeScreen";
// import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/User/Login";
import VerificationCard from "../pages/Auth/User/Verifys";
// import NotificationCard from "../pages/Auth/Notification";
import Dashboardlayout from "../layout/Dashboardlayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AuthLayout from "../layout/AuthLayout";
import Get_started from "../pages/Auth/User/Get_started";
import Register from "../pages/Auth/User/Register";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import AdminDashLayout from "../layout/AdminDashLayout";
import AdminGet_started from "../pages/Auth/Admin/Admin-Get_started";
import AdminRegister from "../pages/Auth/Admin/AdminRegister";
import AdminVerifys from "../pages/Auth/Admin/AdminVerifys";
import AdminLogin from "../pages/Auth/Admin/Admin-Login";
import VendorGet_started from "../pages/Auth/vendor/Vendor-Get_started";
import VendorRegister from "../pages/Auth/vendor/VendorRegister";
import VendorLogin from "../pages/Auth/vendor/Vendor-Login";
import UserLayout from "../layout/UserLayout";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import { Vendor } from "../pages/Home/Vendor";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/vendor",
    element: <Vendor />,
  },
  {
    path: "/account",
    element: <AuthLayout />,
    children: [
      {
        path: "get_started",
        element: <Get_started />,
      },
      {
        path: "signup",
        index: true,
        element: <Register />,
      },
      // {
      //   path: "register",
      //   index: true,
      //   element: <Register />,
      // },
      {
        path: "signin",
        index: true,
        element: <Login />,
      },
      {
        path: "verify",
        index: true,
        element: <VerificationCard />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AuthLayout />,
    children: [
      {
        path: "get-started",
        index: true,
        element: <AdminGet_started />,
      },
      {
        path: "signup",
        index: true,
        element: <AdminRegister />,
      },
      {
        path: "verify",
        index: true,
        element: <AdminVerifys />,
      },
      {
        path: "login",
        index: true,
        element: <AdminLogin />,
      },
    ],
  },

  {
    path: "/vendor",
    element: <AuthLayout />,
    children: [
      {
        path: "get-started",
        index: true,
        element: <VendorGet_started />,
      },
      {
        path: "signup",
        index: true,
        element: <VendorRegister />,
      },
      // {
      //   path: "verify",
      //   index: true,
      //   element: <AdminVerifys />,
      // },
      {
        path: "login",
        index: true,
        element: <VendorLogin />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboardlayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    ],
  },
  {
    path: "/admin_dashboard",
    element: <AdminDashLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/user_dashboard",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
    ],
  },
]);
