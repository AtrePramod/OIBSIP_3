import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';


const CheckOut = () => {
    return (
        <StripeCheckout>
            <Button>Pay Now</Button>
        </StripeCheckout>
    )
}

export default CheckOut
