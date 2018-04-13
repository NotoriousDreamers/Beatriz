import React from "react";
import $ from 'jquery'
import CateringList from '../components/catering/cateringList.jsx'
import Header from '../components/home/Header.jsx'

import FillOutForm from'../components/catering/FillOutForms.jsx'
class Catering extends React.Component {
  constructor(props) {
    super(props);
   this.getInfo=this.getInfo.bind(this)
    this.addInfo=this.addInfo.bind(this);
  }
  getInfo(){
  $.ajax({
    url: '/email',
    method: 'GET',
    success: (data) => {
      this.setState({info:data[0]});
    },
    error: (xhr, err) => {
      console.log('err', err);
    }
  })
  }

  addInfo(fullName,email,phoneNumber,questions) {
  $.ajax({
    method:"POST",
    url:"/email",
    contentType:'application/json',
    data: JSON.stringify({
      fullName:fullName,
      email:email,
      phoneNumber:phoneNumber,
      questions:questions
    })
  }).done(() => {
      this.getInfo();
    });
}

render(){
  return (
  <div>
    <Header />
    <FillOutForm addInfo={this.addInfo}  />
  </div>
    )
  }
};

export default Catering;
