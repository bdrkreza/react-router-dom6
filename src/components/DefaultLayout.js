import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function DefaultLayout({children}) {
    const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("/dashboard") && <Navbar />}
      {children}
      {!location.pathname.includes("/dashboard") && <Footer />}
    </div>
  );
}
