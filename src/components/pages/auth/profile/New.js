import React from "react";

function New() {
  return (
    <div>
      <div class="back">
        <a href="Collection.html">
          <p> Back</p>
        </a>
      </div>
      <hr style={{ marginTop: "30px" }} />
      <div class="select">
        <h2 style={{ marginTop: "30px" }}>Select an Artist</h2>
        <div style={{ marginTop: "30px" }} class="container">
          <div class="entryarea">
            <input
              style={{ width: "150%" }}
              type="text"
              placeholder="Search for artist on Artist"
            />
            <i
              style={{ marginLeft: "1170px", color: "#838383" }}
              class="fa-solid fa-magnifying-glass"
            ></i>
          </div>
        </div>
        <p class="pe" style={{ marginTop: "30px" }}>
          Can't find the artist? <a href="Upload.html">Add their name</a>.
        </p>
      </div>
    </div>
  );
}

export default New;
