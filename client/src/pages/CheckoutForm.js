import { PaymentElement } from "@stripe/react-stripe-js";
import { React, createContext, useState, useEffect,useContext } from "react";
import { useStripe, useElements, CardElement,card} from "@stripe/react-stripe-js";
import { AppContext } from '../components/AppContext';
import { Button, Form, Input } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
export default function CheckoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { global_temp, updateMyVariable } = useContext(AppContext);
  console.log("In Checkout Form");
  console.log(global_temp);
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);
    console.log(elements._commonOptions.clientSecret);
    const clientSecret = elements._commonOptions.clientSecret.clientSecret;
    // const { payment_intent,error } = await stripe.confirmPayment({
    //   clientSecret
    //   // confirmParams: {
    //   //   // Make sure to change this to your payment completion page
    //   //   return_url: `${window.location.origin}/completion`,
    //   // //  redirect:'manual',
       
          
    //   // },
    // });
    stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        email: global_temp[1],
      },
    },
  })
  .then(function(result) {
    // Handle result.error or result.paymentIntent
    const error = result.error;
    console.log(error);
    if(error){
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occured.");
      }
      
    }else{
      console.log("ALL GOOD");
      const bodydata = {name:global_temp[0],email:global_temp[1],password:global_temp[2],phone:global_temp[3],gender:global_temp[4],address:global_temp[6],city:global_temp[7],zipcode:global_temp[8],group:global_temp[9],type:global_temp[10],noOfAppointment:global_temp[11]};
      try {
        fetch('/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify({ bodydata })
        })
          .then(response => response.json())
          .then(data => navigate("/login"))
          .catch(error => console.error(error))
        
      } catch (error) {
        dispatch(hideLoading());
        toast.error("Something went wrong");
      }
      
    }
  });
    // console.log(payment_intent);
    // console.log(error);
    
    setIsProcessing(false);
  };

  return (
    
     <div id="payment-container"> 
    <form id="payment-form"  onSubmit={handleSubmit}>
      
      <CardElement class="" id="payment-element" />
      <button class="button-payment" disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    </div>
    
  );
}
