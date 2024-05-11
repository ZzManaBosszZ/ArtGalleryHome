import React from "react";

function Profile() {
  return (
    <div>
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
              src="d"
              alt=""
              style={{ borderRadius: "50%", width: "100px" }}
            />
            <div class="menu-left-right ml-3">
              <h3>Hieu</h3>
              <p style={{ color: "#707070" }}>Member since 2024</p>
            </div>
          </div>
          <div class="menu-right">
            <a href="Edit.html">
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
                      href="Collection.html"
                    >
                      My Collection
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="Insights.html">
                      Insights
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="Saves.html">
                      Saves
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="Follows.html">
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
              <a href="New.html">
                <button class="cta-button">Upload Artwork</button>
              </a>
            </div>
            <div class="hero-image">
              <img src="/art/1321760.jpg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
