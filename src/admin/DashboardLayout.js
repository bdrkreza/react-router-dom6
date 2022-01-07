import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function DashboardLayout() {
  return (
    <>
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
