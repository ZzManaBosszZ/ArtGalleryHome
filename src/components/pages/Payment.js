import React, { useState } from "react";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("CreditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };
  const handleCardNameChange = (event) => {
     setCardName(event.target.value);
   };
  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
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
                    value="CreditCard"
                    checked={selectedMethod === "CreditCard"}
                    onChange={handleMethodChange}
                  />
                  Credit card
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
              {selectedMethod === "CreditCard" && (
                <div>
                  <div>
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="1234 1234 1234 1234"
                      name="cardNumber"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input
                      type="text"
                      id="expiryDate"
                      placeholder="MM/YY"
                      name="expiryDate"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVC:</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={cvv}
                      onChange={handleCvvChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="cardName">Card name</label>
                    <input
                      type="text"
                      id="cardName"
                      placeholder="Name on card"
                      name="cardName"
                      value={cardName}
                      onChange={handleCardNameChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" />
                  </div>
                  <div>
                    <label htmlFor="streetAddress">Address line 1</label>
                    <input
                      type="text"
                      id="streetAddress"
                      name="streetAddress"
                      placeholder="Street address"
                    />
                  </div>
                  <div>
                    <label htmlFor="aptFloorSuite">Address line 2</label>
                    <input
                      type="text"
                      id="aptFloorSuite"
                      name="aptFloorSuite"
                      placeholder="Apt, floor, suite, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" />
                  </div>
                  <div>
                    <label htmlFor="state">State, province, or region</label>
                    <input type="text" id="state" name="state" />
                  </div>
                  <div>
                    <label htmlFor="postalCode">ZIP/postal code</label>
                    <input type="text" id="postalCode" name="postalCode" />
                  </div>
                </div>
              )}

              {selectedMethod === "WireTransfer" && (
                <div>
                  <p>
                    To pay by wire transfer, complete checkout and a member of
                    the Artsy team will contact you with next steps by email.
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
            <button className="next-offer">
              <a href="/review">Continue</a>
            </button>
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
