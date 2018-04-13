import React from 'react';
import CateringItem from './cateringItem.jsx';
import {Table,tr,thead,th} from 'react-bootstrap'
const CateringList=(props)=>(
  <div className="CateringList">
    <div className="row-4">
    <div className="col-sm-12">
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Completo</th>
          <th>Numero de Telefono</th>
          <th>Correo Electronico</th>
          <th>Mensaje</th>
        </tr>
      </thead>
    </Table>
{props.info.map((item)=>
    <CateringItem item={item} key={item.id}></CateringItem>
  )}{console.log(props.item)}
</div>
</div>
  </div>
);
export default CateringList;
