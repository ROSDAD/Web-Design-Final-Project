
import { useLocation } from 'react-router-dom';

import { React, createContext, useState, useEffect,useContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { AppContext } from '../components/AppContext';
function Payment() {
    const { global_temp, updateMyVariable } = useContext(AppContext);
    const location = useLocation();
    const { name, emailAddress, phoneNumber, sex, role, address, city, zipcode, subscriptionType, subscriptionPlan  } = location.state;
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    console.log("In Payment Page");
    console.log(global_temp);
    useEffect(() => {
      fetch("/config").then(async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      });
    }, []);
  
    useEffect(() => {
      fetch("/create-payment-intent", {
        method: "POST",
        body: JSON.stringify({}),
      }).then(async (result) => {
        var { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      });
    }, []);
  
    return (
      <>
        
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </>
    );
}

export default Payment