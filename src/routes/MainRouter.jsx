import MainLayout from "@/layout/MainLayout";
import AccountList from "@/pages/Account/AccountList";
import Authentication from "@/pages/Authentication";
import DailyReportForm from "@/pages/DailyReports/DailyReportForm";
import DailyReportsList from "@/pages/DailyReports/DailyReportsList";
import DailyReportForm from "@/pages/DailyReports/DailyReportForm";
import DailyReportsList from "@/pages/DailyReports/DailyReportsList";
import Dashboard from "@/pages/Dashboard";
import LabourForm from "@/pages/Labour/LabourForm";
import LabourList from "@/pages/Labour/LabourList";
import PurchaseList from "@/pages/Purchase/PurchaseList";
import RateList from "@/pages/Rate/RateList";
import SiteForm from "@/pages/Site/SiteForm";
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
            path: "add/",
            element: <StaffForm />,
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
      {
        path: "/labour/",
        children: [
          { path: "", element: <LabourList /> },
          { path: "add/", element: <LabourForm /> },
        ],
      },
      {
        path: "/site/",
        children: [
          { path: "", element: <SiteList /> },
          { path: "add/", element: <SiteForm /> },
        ],
      },
      { path: "/account/", element: <AccountList /> },
      { path: "/supplier/", element: <SupplierList /> },
      { path: "/tools/", element: <ToolList /> },
      { path: "/purchase/", element: <PurchaseList /> },
      {
        path: "/report/",
        children: [
          { path: "", element: <DailyReportsList /> },
          { path: "add/", element: <DailyReportForm /> },
        ],
      },
      { path: "/rate/", element: <RateList /> },
    ],
  },
]);

export default MainRouter;
