import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const PaymentForm = ({ handleEnroll }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState("");

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
            handleEnroll(paymentMethod.id);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe} className="btn btn-brand my-3">
                Pay
            </button>
            {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
        </form>
    );
};

export default PaymentForm;
