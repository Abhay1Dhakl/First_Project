import React from 'react'
import Table from 'react-bootstrap/Table'
export default function Admin() {
  return (
    <div className='right-content'>  
    <Table responsive="sm" className='table'>
    <thead>
      <tr>
        <th>#</th>
        <th>ID</th>
        <th>EMAIL</th>
        <th>NAME</th>
        <th>TC</th>
        <th>IS ADMIN</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      
    </tbody>
  </Table>
  
  </div>
  )
}
