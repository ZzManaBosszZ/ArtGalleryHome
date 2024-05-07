import React, { useState } from "react";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("CreditCard");
  

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };


  return (
    <div>
      <link rel="stylesheet" href="assets/css/payment.css" />
      <div className="Payment-page">
        <div className="auction-steps">
          <a id="offer" className="offer-section">
            <h3>Offer</h3>
            <i className="fa-solid fa-angle-right"></i>
          </a>
          <a id="shipping" className="shipping-section">
            <h3>Shipping</h3>
            <i className="fa-solid fa-angle-right"></i>{" "}
          </a>
          <a id="payment" className="payment-section">
            <h3>Payment</h3>
            <i className="fa-solid fa-angle-right"></i>
          </a>
          <a id="review" className="review-section">
            <h3>Review</h3>
            <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="main-payment_page">
          <div className="payment-content">
            <h2>Payment method</h2>
            <div className="payment-method">

              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Paypal"
                    checked={selectedMethod === "Paypal"}
                    onChange={handleMethodChange}
                  />
                  Paypal
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="MoMo"
                    checked={selectedMethod === "MoMo"}
                    onChange={handleMethodChange}
                  />
                  MoMo
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="VnPay"
                    checked={selectedMethod === "VnPay"}
                    onChange={handleMethodChange}
                  />
                  VnPay
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="WireTransfer"
                    checked={selectedMethod === "WireTransfer"}
                    onChange={handleMethodChange}
                  />
                  Wire transfer
                </label>
              </div>
            </div>
            <div className="payment-detail">
              <h3>Payment detail</h3>
             
              {selectedMethod === "MoMo" && (
                <div>
                  <p>
                  We will provide you with a QR code for payment.
                  </p>
                  <p>
                  After payment is completed, we will send the bill to you and proceed with the next procedure
                  </p>
                  <p>
                  If any problem occurs during payment, please contact us{" "}
                    <a href="mailto:orders@artsy.net">orders@artsy.net</a>
                  </p>
                </div>
              )} {selectedMethod === "VnPay" && (
                <div>
                  <p>
                  We will provide you with a QR code for payment.
                  </p>
                  <p>
                  After payment is completed, we will send the bill to you and proceed with the next procedure
                  </p>
                  <p>
                  If any problem occurs during payment, please contact us{" "}
                    <a href="mailto:orders@artsy.net">orders@artsy.net</a>
                  </p>
                </div>
              )} {selectedMethod === "Paypal" && (
                <div>
                  <p>
                  We will provide you with a QR code for payment.
                  </p>
                  <p>
                  After payment is completed, we will send the bill to you and proceed with the next procedure
                  </p>
                  <p>
                  If any problem occurs during payment, please contact us{" "}
                    <a href="mailto:orders@artsy.net">orders@artsy.net</a>
                  </p>
                </div>
              )}

              {selectedMethod === "WireTransfer" && (
                <div>
                  <p>
                    To pay by wire transfer, complete checkout and a member of
                    the Artsy team will contact you with next steps by email.
                  </p>
                  <p>
                  We will provide you with a QR code for payment.
                  </p>
                  <p>
                    Please inform your bank that you will be responsible for all
                    wire transfer fees.
                  </p>
                  <p>
                    Questions? Email{" "}
                    <a href="mailto:orders@artsy.net">orders@artsy.net</a>
                  </p>
                </div>
              )}
            </div>
            
              <a href="/review" className="next-offer">Continue</a>
            
          </div>

          <div className="offer-order">
            <div className="info-art">
              <img src="assets/images/artists/artist2.webp"></img>
              <div className="name-artist">Rachel MacFarlane</div>
              <div className="exhibition">Perfomer, 2024</div>
              <div className="address">New York, NY, US</div>
              <div className="price">$10,000-$15,000</div>
            </div>
            <div className="info-order">
              <div className="info-order_item">
                <div className="title-item">Your offer</div>
                <div className="content-item">US$15,000.00</div>
              </div>
              <div className="info-order_item">
                <div className="title-item">Shipping</div>
                <div className="content-item">Calculated in next steps</div>
              </div>
              <div className="info-order_item">
                <div className="title-item">Tax*</div>
                <div className="content-item">Calculated in next steps</div>
              </div>
              <div id="total-item" className="info-order_item">
                <div className="title-item">Total</div>
                <div className="content-item">Waiting for final costs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
