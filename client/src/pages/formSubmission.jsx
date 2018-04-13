import React from 'react';
import $ from 'jquery';
import CateringList from '../components/catering/cateringList.jsx'
class formSubmission extends React.Component{
  constructor(props){
    super(props);
    this.state={
      info:[]
    }
  this.addInfo=this.addInfo.bind(this);
  this.getInfo=this.getInfo.bind(this);
  }

  addInfo(fullName,phoneNumber,email,questions) {
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


  getInfo(){
  $.ajax({
    url: '/email',
    method: 'GET',
    success: (results) => {
      this.setState({info:results[0]});
    },
    error: (xhr, err) => {
      console.log('err', err);
    }
  })
  }

  componentDidMount() {
  this.getInfo();
  }
  render(){
    return(<div>

      <CateringList info={this.state.info}/>

    </div>)
  }
}
export default formSubmission
