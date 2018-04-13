import React from "react";
import {Media} from "react-bootstrap";

const ReviewsItem = (props) => (
  <div>
    <Media>
   <Media.Left>
     <img width={64} height={64} src="https://www.wpclipart.com/food/pizza/pepperoni_pizza.png" alt="thumbnail" />
   </Media.Left>
   <Media.Body>
     <Media.Heading>{props.list.title}</Media.Heading>
     <p>
       {props.list.reviews}
     </p>
   </Media.Body>
 </Media>
</div>)

export default ReviewsItem;
