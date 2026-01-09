import MainLayout from "@/layout/MainLayout";
import AccountForm from "@/pages/Account/AccountForm";
import AccountList from "@/pages/Account/AccountList";
import Authentication from "@/pages/Authentication";
import DailyReportEdit from "@/pages/DailyReports/DailyReportEdit";
import DailyReportForm from "@/pages/DailyReports/DailyReportForm";
import DailyReportsList from "@/pages/DailyReports/DailyReportsList";
import DailyReportView from "@/pages/DailyReports/DailyReportView";
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
import SupplierForm from "@/pages/Supplier/SupplierForm";
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
      { path: "/sample/", element: <Staff /> },
      {
        path: "/staff/",
        children: [
          {
            path: "add/",
            element: <StaffForm />,
          },
          {
            path: "edit/:uuid",
            element: <StaffList />,
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
      {
        path: "/account/",
        children: [
          { path: "", element: <AccountList /> },
          { path: "add/", element: <AccountForm /> },
        ],
      },
      {
        path: "/supplier/",
        children: [
          { path: "", element: <SupplierList /> },
          { path: "add/", element: <SupplierForm /> },
          { path: "add/", element: <DailyReportForm /> },
          { path: "add/", element: <DailyReportForm /> },
        ],
      },
      {
        path: "/tools/",
        children: [
          { path: "", element: <DailyReportsList /> },
          { path: "add/", element: <DailyReportForm /> },
          { path: "add/", element: <DailyReportForm /> },
          { path: "add/", element: <DailyReportForm /> },
        ],
      },
      {
        path: "/purchase/",
        children: [
          { path: "", element: <DailyReportsList /> },
          { path: "add/", element: <DailyReportForm /> },
          { path: "add/", element: <DailyReportForm /> },
          { path: "add/", element: <DailyReportForm /> },
        ],
      },
      {
        path: "/daily-report/",
        children: [
          { path: "", element: <DailyReportsList /> },
          { path: "add/", element: <DailyReportForm /> },
          { path: "edit/:uuid", element: <DailyReportEdit /> },
          { path: "view/:uuid", element: <DailyReportView /> },
        ],
      },
      {
        path: "/rate/",
        children: [
          { path: "", element: <DailyReportsList /> },
          { path: "add/", element: <DailyReportForm /> },
          { path: "add/", element: <DailyReportForm /> },
          { path: "add/", element: <DailyReportForm /> },
        ],
      },
    ],
  },
]);

export default MainRouter;
