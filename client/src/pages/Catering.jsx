import React from "react";

import CateringList from '../components/catering/cateringList.jsx'
import Header from '../components/home/Header.jsx'
import questions from '../components/catering/questions.js'

class Catering extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      questions:window.questions
    })
  }
render(){
  return (
  <div>
    <Header />
    <CateringList question={this.state.questions}/>
    <button>ENVIAR</button>
  </div>
    )
  }
};

export default Catering;
