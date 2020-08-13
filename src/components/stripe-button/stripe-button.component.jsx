import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HFnxmDOxYdxqLuMGxOTatw4hXhG6VVgXWPnE02cXLWgRGCNkULUpd7EvPgQgKdaitlMq3fSUEnygP59d09hN42z00f6hWbDc8';
 
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
       <StripeCheckout 
         label='Pay Now' 
         name='CRWN Clothing Ltd.' 
         billingAddress 
         shippingAddress 
         image='https://svgshare.com/i/CUz.svg' 
         description={`Your total is ${price}`} 
         amount={priceForStripe} 
         panelLabel='Pay Now' 
         token={onToken} 
         stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton
