import React from "react";
import { useState } from "react";
import "../../../../css/upload.css"
function Upload() {
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);

  const handleCheckbox1Change = () => {
    setCheckbox1Checked(!checkbox1Checked);
    setCheckbox2Checked(false);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2Checked(!checkbox2Checked);
    setCheckbox1Checked(false);
  };
  return (
    <div class="container-upload">

      <div style={{ marginTop: "20px" }}>
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
            <p className="p-upload">
              <a style={{ color: "#000" }} href="/new">
                Back
              </a>
            </p>
          </div>
          <div class="menu-right">
            <a href="#">
              <button class="btn-1-upload">Upload Artwork</button>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div class="form">
        <h2>Add Artwork Details </h2>
        <div class="input-row">
          <input class="ttt" type="text" placeholder="Artist" />
          <input class="ttt" type="text" placeholder="Title" />
        </div>
        <div style={{ display: "flex" }} class="re">
          <p style={{ fontSize: "small" }}>*Required</p>
          <p style={{ fontSize: "small", marginLeft: "660px" }}>*Required</p>
        </div>

        <div class="input-row">
          <input class="ttt" type="text" placeholder="Medium" />
          <input class="ttt" type="text" placeholder="Year" />
        </div>
        <p style={{ fontSize: "small" }}>*Required</p>
        <div class="input-row">
          <input class="ttt" type="text" placeholder="Metarials" />
        </div>
        <div class="input-row">
          <input class="ttt" type="text" placeholder="Rarity" />
        </div>
        <div class="input-row">
          <input class="nbv" type="text" placeholder="Height" />
          <input class="nbv" type="text" placeholder="Width" />
          <input class="nbv" type="text" placeholder="Depth" />
          <div class="checkbox-container">
            <input
              type="checkbox"
              id="checkbox1"
              class="custom-checkbox1"
              checked={checkbox1Checked}
              onChange={handleCheckbox1Change}
            />
            <label for="checkbox1" class="checkbox-label">
              in
            </label>
          </div>

          <div class="checkbox-container-upload">
            <input
              type="checkbox"
              id="checkbox2"
              class="custom-checkbox1"
              checked={checkbox1Checked}
              onChange={handleCheckbox1Change}
            />
            <label for="checkbox2" class="checkbox-label">
              cm
            </label>
          </div>
        </div>
        <div class="input-row">
          <input class="ttt" type="text" placeholder="Price Paid" />
          <div class="checkbox-container">
            <input
              type="checkbox"
              id="checkbox3"
              class="custom-checkbox2"
              checked={checkbox2Checked}
              onChange={handleCheckbox2Change}
            />
            <label for="checkbox3" class="checkbox-label">
              $USD
            </label>
          </div>

          <div class="checkbox-container">
            <input
              type="checkbox"
              id="checkbox4"
              class="custom-checkbox2"
              checked={checkbox2Checked}
              onChange={handleCheckbox2Change}
            />
            <label for="checkbox4" class="checkbox-label">
              €EUR
            </label>
          </div>

          <div class="checkbox-container">
            <input
              type="checkbox"
              id="checkbox5"
              class="custom-checkbox2"
              checked={checkbox2Checked}
              onChange={handleCheckbox2Change}
            />
            <label for="checkbox5" class="checkbox-label">
              £GBP
            </label>
          </div>
        </div>
        <div class="input-row">
          <input class="ttt" type="text" placeholder="Provenance" />
          <input class="ttt" type="text" placeholder="City" />
        </div>
      </div>
      <p class="plo">Upload Photos</p>
      <div class="drag">
        <h2 className="upload">Drag and drop photos here</h2>
        <p className="p-upload">Files supported:JPG, PNG</p>
        <p className="p-upload">Total maximum size: 30MB</p>
        <div class="menu-right">
          <a href="#">
            <button class="btn-1-upload">Add Photo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Upload;
