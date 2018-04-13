import React from "react";
import $ from 'jquery'
import CateringList from '../components/catering/cateringList.jsx'
import Header from '../components/home/Header.jsx'
import Packages from '../components/catering/packages.jsx'
import FillOutForm from'../components/catering/FillOutForms.jsx'
class Catering extends React.Component {
  constructor(props) {
    super(props);
    this.addInfo=this.addInfo.bind(this);
  }
  addInfo(fullName,phoneNumber,email,questions) {
  $.ajax({
    method:"POST",
    url:"/email",
    contentType:'application/json',
    data: JSON.stringify({
      fullName:fullName,
      phoneNumber:phoneNumber,
      email:email,
      questions:questions
    })
  })
}

render(){
  return (
  <div>
    <Header />
    <FillOutForm addInfo={this.addInfo}  />
    <Packages />
  </div>
    )
  }
};

export default Catering;
