
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
    const [amountToBe,setAmountToBe] = useState(100);
    // subscriptionType = global_temp[10]
    // console.log(subscriptionType);
    
    
    useEffect(() => {
      fetch("/config").then(async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      });
    }, []);
  
    useEffect(() => {
      console.log(global_temp[10])
      if(global_temp[10] === "Premium - $100"){
        console.log('in prem')
        setAmountToBe(100)
    }else if(global_temp[10] === "Basic - $80"){
      console.log('in basic')
      setAmountToBe(80)
    }},[global_temp[10]]);

    useEffect(() =>{
    console.log(amountToBe)
      fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({amount:amountToBe}),
      }).then(async (result) => {
        var { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      });
    }, [amountToBe]);
  
    return (
      <>
        
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <h2 style={{ "text-align":"center" }}>Pay Now: ${amountToBe}</h2>
            <CheckoutForm />
          </Elements>
        )}
      </>
    );
}

export default Payment