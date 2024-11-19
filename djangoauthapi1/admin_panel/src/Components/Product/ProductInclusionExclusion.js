import { Button } from '@mui/material'
import React from 'react'
import Form from 'react-bootstrap/Form';
import TextAreaWithFormatting from '../Text Editor/TextAreaWithFormatting';

export default function ProductInclusionExclusion() {
  return (
    <div className='right-content'>
    <Form>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Product Name</Form.Label>
     <Form.Control type="Text" />
   </Form.Group>
 
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Whats Included</Form.Label>
     
        <TextAreaWithFormatting/>
        <Form.Label>Whats Not Included</Form.Label>
        <TextAreaWithFormatting/>
      </Form.Group>
      <button className='btn-primary'>Submit</button>
 </Form>
 </div>
  )
}
