import React from 'react'
import Form from 'react-bootstrap/Form';
import TextAreaWithFormatting from '../Text Editor/TextAreaWithFormatting';

export default function Product() {
  return (
    <div className='right-content'>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="Text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Product Information</Form.Label>
        <Form.Control as="textarea" placeholder="Paragraph 1" rows={3} />
        <Form.Control as="textarea" placeholder="Paragraph 2" rows={3} />
      </Form.Group>
     
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
      <button className='btn-danger'>Submit</button>
    </Form>
    </div>
  )
}
