import React from 'react';
import CateringItem from './cateringItem.jsx'
const CateringList=(props)=>(
  <div className="CateringList">

{props.info.map((item)=>
    <CateringItem item={item} key={item.id}></CateringItem>
  )}
  </div>
);
export default CateringList;
