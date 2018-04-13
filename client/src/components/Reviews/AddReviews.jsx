import React from 'react';


class AddReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      reviews: ''
    }
this.add=this.add.bind(this);
this.updateTitle=this.updateTitle.bind(this);
this.updateReviews=this.updateReviews.bind(this);
  }
updateTitle(e){
  this.setState({
    title: e.target.value
  }) 
}

updateReviews(e){
  this.setState({
    reviews: e.target.value
  })
}


add(){
  this.props.addReviews(this.state.title, this.state.reviews);
  this.setState({
    title: '',
    reviews: ''
  })
}
  render () {
    return (<div>
      El titulo de tu reseña: <input  id="txtReview" onChange={this.updateTitle} value={this.state.title} ></input>
      <br />
      Tu reseña: <input onChange={this.updateReviews} value={this.state.reviews} ></input>
    <br />
  <button onClick={this.add}>Add Reviews</button>


    </div>);
  }
}

export default AddReviews;
