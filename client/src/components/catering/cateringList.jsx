import React from 'react';
import CateringItem from './cateringItem.jsx'
const CateringList=(props)=>(
  <div className="CateringList">

<h1>ORDEN DE BANQUETE</h1>
<h2> POR FAVOR LLENE ESTA FORMA</h2>
  <h3>Nombre Completo</h3>:<input></input><br/>
  <h3>Numero de Telefono</h3>:<input></input><br/>
  <h3>Correo Electronico</h3>:<input></input><br/>
{props.question.map( (question)=>
    <CateringItem question={question}></CateringItem>
  )}
  </div>
);
export default CateringList;
