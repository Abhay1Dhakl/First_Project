import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from "./KhaltiConfig"
export default function Khalti() {
    let checkout = new KhaltiCheckout(config);
  return (
    <div>
      <h1>khalti payment</h1>
      <h1>khalti payment</h1>
        <button onClick={()=> checkout.show({amount: 1000})}>Pay by Khalti</button>
    </div>
  )

}
