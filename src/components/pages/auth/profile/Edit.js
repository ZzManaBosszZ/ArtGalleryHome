import React from "react";

function Edit() {
  return (
    <div>
      <link rel="stylesheet" href="assets/css/profile/edit.css" />
      <div
        class="menu-left d-flex align-items-center"
        style={{ width: "300px", margin: "30px 0 0 50px" }}
      >
        <p>
          <a class="aaa" style={{ color: "#000" }} href="/profile">
            {" "}
            Collector Profile
          </a>
        </p>
      </div>
      <hr style={{ marginTop: "20px" }} />
      <nav style={{ marginTop: "50px" }} id="profile-navigation">
        <ul>
          <li>
            <a href="/edit">Edit Profile</a>
          </li>
          <li>
            <a class="tip" href="#">
              Address
            </a>
          </li>
          <li>
            <a class="tip" href="#">
              Order History
            </a>
          </li>
        </ul>
      </nav>
      <hr style={{ marginTop: "10px" }} />
      <div style={{ display: "flex" }} class="edit">
        <div class="file">
          <img
            src="assets/images/profile/user.png"
            alt=""
            style={{
              borderRadius: "50%",
              width: "100px",
              marginTop: "20px",
              marginLeft: "50px",
            }}
          />
          <div class="menu-left-right ml-3">
            <a style={{ color: "#707070" }} href="">
              <p style={{ marginLeft: "50px" }}>Choose an Image</p>
            </a>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input type="text" required />
                <div class="labelline">Full Name</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input type="text" required />
                <div class="labelline">Birthday</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input type="text" required />
                <div class="labelline">AddPhone</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input type="text" required />
                <div class="labelline">About</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn-1">
        Save
      </button>
    </div>
  );
}

export default Edit;
