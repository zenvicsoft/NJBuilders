import MainLayout from "@/layout/MainLayout";
import AccountList from "@/pages/Account/AccountList";
import Authentication from "@/pages/Authentication";
import Dashboard from "@/pages/Dashboard";
import LabourList from "@/pages/Labour/LabourList";
import PurchaseList from "@/pages/Purchase/PurchaseList";
import RateList from "@/pages/Rate/RateList";
import ReportsList from "@/pages/Reports/ReportsList";
import SiteList from "@/pages/Site/SiteList";
import Staff from "@/pages/Staff";
import StaffForm from "@/pages/Staff/Staffform";
import StaffList from "@/pages/Staff/StaffList";
import SupplierList from "@/pages/Supplier/SupplierList";
import ToolList from "@/pages/Tools/ToolList";
import { createBrowserRouter } from "react-router-dom";

const MainRouter = createBrowserRouter([
  {
    index: true,
    element: <Authentication />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/dashboard/", element: <Dashboard /> },
      { path: "/sample/", element: <Staff/> },
      {
        path: "/staff/",
        children: [
          {
            path: "",
            element: <StaffList/>,
          },
          {
            path: "add/",
            element: <StaffForm/>,
          },
          {
            path: "edit/:uuid",
            element: <StaffList/>,
          },
          {
            path: "view/:uuid",
            element: <StaffList />,
          },
        ],
      },
      { path: "/labour/", element: <LabourList /> },
      { path: "/site/", element: <SiteList /> },
      { path: "/account/", element: <AccountList /> },
      { path: "/supplier/", element: <SupplierList /> },
      { path: "/tools/", element: <ToolList /> },
      { path: "/purchase/", element: <PurchaseList /> },
      { path: "/report/", element: <ReportsList /> },
      { path: "/rate/", element: <RateList /> },
    ],
  },
]);

export default MainRouter;
