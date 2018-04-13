import $ from 'jquery';
import React from 'react';


import Footer from "../components/home/Footer.jsx";
import Header from "../components/home/Header.jsx";
import CateringList from '../components/catering/cateringList.jsx';

class formSubmission extends React.Component{
  constructor(props){
    super(props);
    this.state={
      info:[]
    }

  this.getInfo=this.getInfo.bind(this);
  }
   getInfo(){
  $.ajax({
    url: '/email',
    method: 'GET',
    success: (data) => {

      this.setState({info:data});
    },
    error: (xhr, err) => {
      console.log('err', err);
    }
  })
  }

  componentDidMount() {
    setTimeout(function() {
      location.reload();
},10000);
  this.getInfo();
  }
  render(){
    return(
      <div>
        <div>
          <Header />
        </div>
        <br /><br /><br /><br /><br />
        <div>
          <CateringList info={this.state.info}/>
           {console.log(this.state.info)}
        </div>
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
       <div>
         <Footer />
       </div>
    </div>)
  }
};

export default formSubmission;
