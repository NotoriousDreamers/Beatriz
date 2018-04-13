import React from 'react';

import {Table,thead,tr,th,tbody,td} from 'react-bootstrap'
const CateringItem =(props)=>(
  <div>
    <Table responsive>

      <tbody>
        <tr>
          <td><h3>{props.item.id}</h3></td>
          <td><h3 className='name'>{props.item.fullName}</h3></td>
          <td><h3 className='phone'>{props.item.phoneNumber}</h3></td>
          <td><h3 className='email'>{props.item.email}</h3></td>
          <td><h3 className='questions'>{props.item.questions}</h3></td>
      </tr>
    </tbody>
    </Table>


  </div>
)
export default CateringItem;
