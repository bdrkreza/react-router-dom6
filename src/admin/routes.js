import Invoices from "./Components/Invoices";
import Team from "./Components/Team";
import Dashboard from "./Dashboard";
import DashboardLayout from "./DashboardLayout";

export let routes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "invoice",
        element: <Invoices />,
      },
      { path: "team", element: <Team /> },
    ],
  },
];
