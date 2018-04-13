import React from 'react';
import PackageItem from './packageItem.jsx'
const PackageList=(props)=>(
  <div className="PackageList">

{props.packages.map((item)=>
    <PackageItem item={item} key={item.id}></PackageItem>
  )}
  </div>
);
export default PackageList;
