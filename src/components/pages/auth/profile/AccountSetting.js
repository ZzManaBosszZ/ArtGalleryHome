import React from "react";
import { Link } from "react-router-dom";

function AccountSettings() {
  return (
    <div class="ko">
      <link rel="stylesheet" href="assets/css/profile/accountsetting.css" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />

      <div style={{ marginTop: "20px" }} class="container">
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
          <p className="poi">hieudeptrai</p>
          <p className="poi" style={{ color: "#707070" }}>
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
        <div class="information">
          <h3>Password</h3>
          <div class="input-row">
            <input
              class="ttt"
              type="password"
              id="password"
              placeholder="Current Password"
            />
          </div>
          <div class="input-row">
            <input
              class="ttt"
              type="password"
              id="password"
              placeholder="New Password"
            />
          </div>
          <div class="input-row">
            <input
              class="ttt"
              type="password"
              id="password"
              placeholder="Repeat New Password"
            />
          </div>
          <div style={{ marginTop: "30px", marginLeft: "20px" }} class="button">
            <button
              style={{ backgroundColor: "#000", color: "#fff" }}
              type="submit"
              class="btn-1"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
