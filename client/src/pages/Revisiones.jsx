import React from "react";
import Header from "../components/home/Header.jsx";
import AddReviews from "../components/Reviews/AddReviews.jsx";
import ReviewsList from "../components/Reviews/ReviewsList.jsx";
import $ from "jquery";

class Revisiones extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
    this.addReview = this.addReview.bind(this);
    this.getReview = this.getReview.bind(this);
  }
  addReview(title, reviews) {
    $.ajax({
      method: 'POST',
      url: '/reviews',
      contentType: 'application/json',
      data: JSON.stringify({
        title: title,
        reviews: reviews
      })
    }).done(() => {
      this.getReview();
    });
  }

  getReview() {
    $.ajax({
      url: '/reviews',
      method: 'GET',
      success: (results) => {
        this.setState({list: results});
      },
      error:(xhr, err) => {
        console.log('err', err);
      }
    })
  }

  componentDidMount() {
    this.getReview();
  }




  render(){
    return (<div>
      <Header />
      <h1>Tus experiencias de primera mano realmente ayudan a nuestra clientela. ¡Gracias!</h1>
     <AddReviews addReviews={this.addReview}/>
     <ReviewsList list={this.state.list}/>

    </div>)
  }
}

export default Revisiones;
