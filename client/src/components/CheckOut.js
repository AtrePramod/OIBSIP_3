import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orderAction'

const CheckOut = ({ subTotal }) => {
    const dispatch = useDispatch()
    const tokenHandler = (token) => {
        dispatch(placeOrder(token, subTotal))
        console.log(token)
    }
    return (
        <StripeCheckout
            amount={subTotal * 100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51NTja5SCMaxcwsjuVD3s3bjVkN40gTzYCb4rKsK5OytnqbkTMwlrPncFJTpV0vGkEK0qfgkSKCxkTgLMyStXeOmd00wOTudWeO'
            currency='INR'
        >
            <Button>Pay Now</Button>
        </StripeCheckout>
    )
}

export default CheckOut
