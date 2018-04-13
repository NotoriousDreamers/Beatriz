import React from 'react';

const CateringItem =(props)=>(
  <div>
    {console.log(props)}
         <h1>{props.item.fullName}</h1>
         <h1>{props.item.phoneNumber}</h1>
         <h1>{props.item.email}</h1>
       <h1>{props.item.questions}</h1>

    </div>
)
export default CateringItem;
