import React from 'react'
import Form from 'react-bootstrap/Form';
import TextAreaWithFormatting from '../Text Editor/TextAreaWithFormatting';
import { useItineraryMutation } from '../Serve/userAuthapi';
import { Box, Button, CircularProgress } from '@mui/material';
export default function ProductItinerary() {
    const[itineraryData,{isLoading}] = useItineraryMutation();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log('Form submitted:', {
            name: data.get('name'),
            topic: data.get('topic'),
            details: data.get('details'),
        });
        const actualData = {
            name : data.get('name'),
            topic : data.get('topic'),
            details : data.get('details')
        }
        try {
            const res = await itineraryData(actualData);
            console.log('Response from server:', res);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

    };
  return (

    <div className='right-content'>
    <Form  onSubmit={handleSubmit}>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Product Name</Form.Label>
     <Form.Control type="Text" id='name' name='name' />
   </Form.Group>
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Product Itinerary</Form.Label>
        <Form.Label>Topic</Form.Label>
        <Form.Control type="Text" id='topic' name='topic' />
        <Form.Label>Description</Form.Label>
        <Form.Control type="Text" id='details' name='details' />
      </Form.Group>
      <Box textAlign='center'>

								{isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Book</Button>}

							

							</Box>
 </Form>
 </div>
  )
}
