import React from "react";
import logo from "../../images/home logo.png";
import man from "../../images/doll.webp";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <div>
      <div className="side-menu">
        <hr />
        <div className="admin-logo">
          <Link to="/">
            <img style={{ width: "40%" }} src={logo} alt="" />
          </Link>
          <i className="admin-welcome">Welcome Back Boss!!!</i>
        </div>
        <hr />

        <div className="admin-profile-img">
          <img src={man} alt="" />
          <h2>
            <a href="#">ADMIN</a>
          </h2>
          <i
            style={{
              color: "rgb(9, 161, 80)",
              fontWeight: "bolder",
              fontSize: "larger",
            }}
          >
            Active
          </i>
        </div>

        <div className="admin-side-links">
          <Link to="/admin">
            {" "}
            <button className="btn">DASH-BOARD</button>
          </Link>

          <Link to="/adminProduct">
            <button className="btn">PRODUCTS</button>
          </Link>

          <Link to="/adminUser">
            <button className="btn">USERS</button>
          </Link>

          <Link to="/adminNewProducts">
            <button className="btn">NEW PRODUCTS</button>
          </Link>

          <Link to="/adminNewUsers">
            <button className="btn">NEW USERS</button>
          </Link>

          <Link to="/">
            <button className="log">EXIT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
