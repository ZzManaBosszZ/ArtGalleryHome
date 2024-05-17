import React, { useState } from "react";

function RegisterArtist() {
  const [anhs, setAnhs] = useState([]);
  console.log(anhs);
  const onFileUploadHandler = (e) => {
    setAnhs(e.target.files);
  };
  const incacanh = () =>
    [...anhs].map((anh) => (
      <div>
        <img src={URL.createObjectURL(anh)} width="200px" />
      </div>
    ));

  return (
    <div className="formedit">
      <link rel="stylesheet" href="assets/css/registerartist.css" />
      <div
        class="menu-left d-flex align-items-center"
        style={{ width: "300px", margin: "30px 0 0 50px" }}
      >
        <p>
          <a class="aaa" style={{ color: "#000" }} href="/profile">
            {" "}
            Profile
          </a>
        </p>
      </div>
      <hr className="hrdev" style={{ marginTop: "20px" }} />
      <div style={{ display: "flex" }} class="edit">
        <div class="file">
          <h1 className="hatmotre">Register Artist</h1>

          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input className="inedit" type="text" required />
                <div class="labelline">Artist Name</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input className="inedit" type="text" required />
                <div class="labelline">Biography</div>
              </div>
            </div>
          </div>
          <div class="hhh">
            <div class="container">
              <div class="entryarea">
                <input className="inedit" type="text" required />
                <div class="labelline">School of Art</div>
              </div>
            </div>
          </div>
          <div class="menu-left-right ml-3">
            <input
              className="upimg"
              type="file"
              multiple
              accept="image/*"
              onChange={onFileUploadHandler}
            />
            <div className="image-gallery">{incacanh()}</div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn-01">
        Register
      </button>
    </div>
  );
}

export default RegisterArtist;
