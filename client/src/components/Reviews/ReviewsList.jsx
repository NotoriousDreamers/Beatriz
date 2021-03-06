import React from "react";
import ReviewsItem from "./ReviewsItem.jsx";

const ReviewsList = (props) => (
  <div className="review">
    {props.list.map((itemx)=> <ReviewsItem list={itemx} key={itemx.id}/>)}
  </div>
)
export default ReviewsList;
