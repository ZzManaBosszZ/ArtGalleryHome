import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useEffect } from "react";
import api from "../services/api";
import url from "../services/url";
import { useParams } from "react-router-dom";
import { getAccessToken } from "../utils/auth";
// This value is from the props in the UI
const style = { "layout": "vertical" };


// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner, currency, amount }) => {
    const [{ isPending, options }, dispatch] = usePayPalScriptReducer();
    const { offerCode } = useParams();

    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAccessToken()}`,
        },
      };
    useEffect(() => {
        dispatch({
            type: 'resetOptions',
            value: {
                ...options, currency: currency
            }
        })
    }, [currency, showSpinner])

    const handlePayment = async (action) => {
        try {
            const updateStatusResponse = await api.put(`https://localhost:7270/api/Offers/update-status-Admin/${offerCode}`, {action}, 
                config
            );
            console.log(updateStatusResponse);
            // Xử lý phản hồi nếu cần
        } catch (error) {
            console.error("Error updating payment status:", error);
        }
    }

    return (
        <>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style, currency, amount]}
                fundingSource={undefined}
                createOrder={(data, action) => action.order.create({
                    purchase_units: [
                        { amount: { currency_code: currency, value: amount } }
                    ]
                }).then(orderID => orderID)}
                onApprove={(data, actions) => actions.order.capture().then(async (response) => {
                    console.log(response)
                    handlePayment('isPaid');
                    console.log(offerCode);


                })}
            />
        </>
    );
}

export default function PayPalButton({ amount, offerCode }) {
    return (
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider onSuccess deferLoading={true} options={{ clientId: "AcbuygWaM7SU1E8AUe3KVTXiHRtez2BaV9XOFuX3bL36MlwwFxfJogjRL6q5TKOD6tQBJ1XeC5omTBXE", components: "buttons", currency: "USD" }}>
                <ButtonWrapper currency={'USD'} showSpinner={false} amount={amount} />
            </PayPalScriptProvider>
        </div>
    );
}