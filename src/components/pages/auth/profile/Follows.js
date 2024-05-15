import React from "react";
import "../../../../css/bootstrap.css"
import { Link } from "react-router-dom";
function Follows() {
  return (
    <div style={{ marginTop: "20px" }} class="container">
      <link rel="stylesheet" href="assets/css/profile/follows.css" />

      <div
        class="menu"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          class="menu-left d-flex align-items-center"
          style={{ width: "300px" }}
        >
          <img
            src="assets/images/profile/user.png"
            alt=""
            style={{ borderRadius: "50%", width: "100px" }}
          />
          <div class="menu-left-right ml-3">
            <h3>Hieu</h3>
            <p style={{ color: "#707070" }}>Member since 2024</p>
          </div>
        </div>
        <div class="menu-right">
        <Link to={`/edit-profile`}>
            <a>
              <button class="btn-1">Settings</button>
            </a>
            </Link>
        </div>
      </div>
      <div class="menu-bottom">
        <p>hieudeptrai</p>
        <p style={{ color: "#707070" }}>
          <i class="fa-solid fa-location-dot"></i> VietNam
        </p>
      </div>
      <div class="navbar">
          <nav class="navbar navbar-expand-lg navbar-light w-100">
            <div class="container-fluid">
              <div
                class="collapse navbar-collapse nav-fill"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav w-100 justify-content-between">
                  <li class="nav-item">
                    <a
                      style={{ color: "#000" }}
                      class="nav-link"
                      href="/profile"
                    >
                      My Collection
                    </a>
                  </li>
                  <li class="nav-item">
                  <Link to={`/setting`}>
                    <a class="nav-link">
                      Account Settings
                    </a>
                    </Link>
                  </li>
                  <li class="nav-item">
                  <Link to={`/artwork-saves`}>
                    <a class="nav-link">
                      Saves
                    </a>
                    </Link>
                  </li>
                  <li class="nav-item">
                  <Link to={`/artist-follow`}>
                    <a class="nav-link">
                      Follows
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr />
        </div>
    </div>
  );
}

export default Follows;
