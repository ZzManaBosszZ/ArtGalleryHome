import React from "react";
import { Link } from "react-router-dom";
function Edit() {
  return (
    <div className="formedit">
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
      <hr className="hrdev" style={{ marginTop: "20px" }} />
      <nav style={{ marginTop: "50px" }} id="profile-navigation">
        <ul className="ghye">
        <li className="hjpk">
          <Link to={`/edit-profile`}>
            <a className="lkm">
              Edit Profile
            </a>
            </Link>
          </li>
          <li className="hjpk">
            <Link to={`/offer-history`}>
            <a className="lkm">
              Offer History
            </a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="hrdev" style={{ marginTop: "10px" }} />
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
                <input className="inedit" type="text" required />
                <div class="labelline">Full Name</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input className="inedit" type="text" required />
                <div class="labelline">Birthday</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input className="inedit" type="text" required />
                <div class="labelline">AddPhone</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input className="inedit" type="text" required />
                <div class="labelline">Address</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input className="inedit" type="text" required />
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
