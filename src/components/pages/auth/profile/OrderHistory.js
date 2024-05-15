import React from "react";
import "../../../../css/orderhistory.css"
function OrderHistory() {
  return (
    <div class="oderdetaill">

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
            <a class="tip" href="/edit">
              Edit Profile
            </a>
          </li>
          <li className="hjpk">
            <a className="lkm" href="/orderhistory">
              Order History
            </a>
          </li>
        </ul>
      </nav>
      <hr className="hrdev" style={{ marginTop: "10px" }} />
      <div class="card">
        <div class="card-header">
          <p>Delivered June 8</p>
        </div>
        <div className="nmbj">
          <div class="card-body">
            <img
              src="https://via.placeholder.com/100"
              alt="Product Image"
              class="product-image"
            />
            <div class="product-details">
              <h3>Mose Tolliver</h3>
              <p>
                Mose Tolliver has become one of the most highly regarded
                American self-taught artists and this work is historically
                important as it was executed in 1970.
              </p>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn">Payment</button>
            <button class="btn">View your item</button>
            <button class="btn">Track package</button>
            <button class="btn">...</button>
          </div>
        </div>
        <hr></hr>
        <div className="nmbj">
          <div class="card-body">
            <img
              src="https://via.placeholder.com/100"
              alt="Product Image"
              class="product-image"
            />
            <div class="product-details">
              <h3>Mose Tolliver</h3>
              <p>
                Mose Tolliver has become one of the most highly regarded
                American self-taught artists and this work is historically
                important as it was executed in 1970.
              </p>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn">Payment</button>
            <button class="btn">View your item</button>
            <button class="btn">Track package</button>
            <button class="btn">...</button>
          </div>
        </div>
        <hr></hr>
        <div className="nmbj">
          <div class="card-body">
            <img
              src="https://via.placeholder.com/100"
              alt="Product Image"
              class="product-image"
            />
            <div class="product-details">
              <h3>Mose Tolliver</h3>
              <p>
                Mose Tolliver has become one of the most highly regarded
                American self-taught artists and this work is historically
                important as it was executed in 1970.
              </p>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn">Payment</button>
            <button class="btn">View your item</button>
            <button class="btn">Track package</button>
            <button class="btn">...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
