// esewa-frontend/src/components/PaymentComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {

    const [formData, setFormData] = useState({
        amount: 100,
        tax_amount: 10,
        total_amount: 110,
        transaction_uuid: 'ab14a8f2b02c3',
        product_code: 'EPAYTEST',
        product_service_charge: 0,
        product_delivery_charge: 0,
        success_url: 'https://esewa.com.np',
        failure_url: 'https://google.com',
        signed_field_names: 'total_amount,transaction_uuid,product_code',
        signature: 'YVweM7CgAtZW5tRKica/BIeYFvpSj09AaInsulqNKHk=',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/handle-payment/', {
                // Include form data here
                // Example: amount, tax_amount, total_amount, transaction_uuid, etc.
           
            });
            console.log(response.data);
            // Handle the response
        } catch (error) {
            console.error('Error submitting payment form:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    

    return (
        <body>
        <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
        <input type="text" id="amount" name="amount" value="100" required/>
        <input type="text" id="tax_amount" name="tax_amount" value ="10" required/>
        <input type="text" id="total_amount" name="total_amount" value="110" required/>
        <input type="text" id="transaction_uuid" name="transaction_uuid"required/>
        <input type="text" id="product_code" name="product_code" value ="EPAYTEST" required/>
        <input type="text" id="product_service_charge" name="product_service_charge" value="0" required/>
        <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required/>
        <input type="text" id="success_url" name="success_url" value="https://esewa.com.np" required/>
        <input type="text" id="failure_url" name="failure_url" value="https://google.com" required/>
        <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required/>
        <input type="text" id="signature" name="signature" required/>
        <input value="Submit" type="submit"></input>
        </form>
       </body>
        
    );
};

export default PaymentComponent;
