import React from 'react';
import {Button} from 'react-bootstrap';


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
      <center> <h2 className="TitulosYHeaders">El titulo de tu reseña</h2>
       <input  id="txtReview" placeholder="  Una palabra que resume tu visita" onChange={this.updateTitle} value={this.state.title} ></input>
      <br />
      <h2 className="TitulosYHeaders">Tu reseña</h2>
       <textarea id="txtReview2" placeholder="  Cuéntale a la gente sobre tu experiencia" onChange={this.updateReviews} value={this.state.reviews} ></textarea>
    <br />
  <Button bsStyle="danger" onClick={this.add}>Agregar Reseña</Button>
  </center>
    </div>);
  }
}

export default AddReviews;
