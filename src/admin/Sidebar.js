import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "none",
    color: "red",
  };

  let activeClassName = "text-danger";
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="invoice"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Invoice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="team"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Team
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
