import React from 'react'
import { useLocation } from 'react-router-dom';

function Payment() {
    const location = useLocation();
    const { name, emailAddress, phoneNumber, sex, role, address, city, zipcode, subscriptionType, subscriptionPlan  } = location.state;
    return (
        <div>
            <h1>Welcome {name} {emailAddress} {phoneNumber}{sex}{role}{address}{city}{subscriptionType}{subscriptionPlan}!</h1>
        </div>
    );
}

export default Payment