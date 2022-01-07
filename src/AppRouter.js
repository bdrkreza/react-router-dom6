import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import DefaultLayout from "./components/DefaultLayout";
import Support from "./components/Support";
import Home from "./home/Home";
import NotFound from "./home/NotFound";

export default function AppRouter() {
  return (
    <div>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="support" element={<Support />} />
          </Route>

          {/* <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
            <Route path="invoice" element={<Invoices />} />
            <Route path="team" element={<Team/>} />
          </Route> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </div>
  );
}
