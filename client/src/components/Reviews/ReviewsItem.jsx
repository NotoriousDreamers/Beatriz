import React from "react";
import {Media} from "react-bootstrap";

const ReviewsItem = (props) => (
  <section id="reviewsItem">
<div className="row-1">
<div className="col-sm-6">
      <right>
    <Media>
   <Media.Right>
     <img width={64} height={74} src="https://i.imgur.com/cWEMVV6.png" alt="thumbnail" />
   </Media.Right>
   <Media.Body>
     <Media.Heading id="mediaHeading">{props.list.title}</Media.Heading>
     <p>
       {props.list.reviews}
     </p>
   </Media.Body>
 </Media>
</right>
</div>
</div>
</section>)

export default ReviewsItem;
