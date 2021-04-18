import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const PaymentStripe = ({ handleEnroll }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm handleEnroll={handleEnroll} />
            </Elements>
        </div>
    );
};

export default PaymentStripe;
