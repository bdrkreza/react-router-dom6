import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="invoice">Invoice</Link>
          </li>
          <li>
            <Link to="team">Team</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
