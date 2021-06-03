import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


function NavBar() {
return (
    <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="navbar-header">
      <NavLink exact to="/" className="navbar-brand">
      Customer Management
      </NavLink>
      </div>
      <ul className="nav navbar-nav navbar-right"> 
      <li className="nav-item"> 
      <NavLink to="/newcustomers">Add New Customer</NavLink>
    </li>
      <li className="nav-item">
      <NavLink to="/listcustomers">List Customers</NavLink>
      </li>
      
    </ul>
  </div>
  </nav>
  </div>
  )
}

export default NavBar;


