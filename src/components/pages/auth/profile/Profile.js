import React from "react";
import "../../../../css/profile.css"

function Profile() {
  return (
    <div class="ko">
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
            <img className="image-profile"
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
            <a href="/edit">
              <button class="btn-1">Settings</button>
            </a>
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
                    <a class="nav-link" href="/accountsetting">
                      Account Settings
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/saves">
                      Saves
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/follows">
                      Follows
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr />
        </div>
        <section class="hero">
          <div class="containers">
            <div class="hero-content">
              <h2>Know Your Collection Better</h2>
              <p>Manage your collection online and get free market insights.</p>
              <a href="/upload">
                <button class="cta-button">Upload Artwork</button>
              </a>
            </div>
            <div class="hero-image">
              <img src="assets/images/profile/1321760.jpg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
