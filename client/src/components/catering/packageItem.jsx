import React from 'react';

const PackageItem =(props)=>(

    <div>

<form>
<div className="radio">
  <label>
    <input type="radio" value="option1" checked={false} />
    {props.item.description}
  </label>
</div>

</form>


</div>
)
export default PackageItem;
