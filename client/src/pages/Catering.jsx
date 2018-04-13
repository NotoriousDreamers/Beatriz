import React from "react";

import Footer from "../components/home/Footer.jsx";
import Header from '../components/home/Header.jsx'
import questions from '../components/catering/questions.js'
import CateringList from '../components/catering/cateringList.jsx'

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
    <div>
    <Footer />
    </div>
  </div>
    )
  }
};

export default Catering;
