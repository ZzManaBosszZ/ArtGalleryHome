import { useCallback, useEffect, useState, useRef } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAccessToken, getDecodedToken } from "../../../utils/auth";
import PayPalButton from "../../../payment/PaypalButton";
import Swal from "sweetalert2";
function Payment() {
  const { offerCode } = useParams();
  const [offerDetail, setOfferDetail] = useState([]);
  const decodedToken = getDecodedToken();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const createOrderData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    };
    try {
      if (decodedToken) {
        // const total = calculateTotal(movieData.selectedSeats, movieData.addFoods);
        // const finalTotal = calculateFinalTotal(total, 0);

        const orderData = {
          // showId: selectShow.id,
          // userId: userInfo.userId,
          // total: total,
          // discountAmount: total - discountRate.data || 0,
          // discountCode: formData.promotionCode || "",
          // finalTotal: discountRate.data ? discountRate.data : finalTotal,
          // paymentMethod: selectedPaymentMethod,
          // tickets: movieData.selectedSeats.map((seat) => ({ seatId: seat.id })),
          // foods: movieData.addFoods && movieData.addFoods.length > 0 ? movieData.addFoods.map((food) => ({ id: food.id, quantity: food.quantity, price: food.price })) : [],
        };

        const orderResponse = await api.post(url.BOOKING.CREATE, orderData, config);

        // Use orderResponse.data.id instead of order.id
        navigate(`/checkout/thank-you/${orderResponse.data.orderCode}`);
        localStorage.removeItem("movie_data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const loadOffer = useCallback(async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${getAccessToken()}`,
      },
    };

    try {
      const offerResponse = await api.get(url.PAYPAL.DETAIL + `/${offerCode}`, config);
      setOfferDetail(offerResponse.data);
    } catch (error) {
      setError(true);
    }
  }, [offerCode]);

  useEffect(() => {
    loadOffer();

    setTimeout(() => {

    }, 2000);
  }, [loadOffer]);

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

        <PayPalButton
          amount={100}  
        // onSuccess={(details, data) => handlePaymentSuccess(details, data)}
        // onCancel={handlePaymentCancel}
        // onError={handlePaymentError}
        />

        

      </div>
    </div>
  );
}

export default Payment;
