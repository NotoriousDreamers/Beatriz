import React from 'react';
import $ from 'jquery';
import CateringList from '../components/catering/cateringList.jsx'
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
},35000);
  this.getInfo();
  }
  render(){
    return(<div>

      <CateringList info={this.state.info}/>
       {console.log(this.state.info)}
    </div>)
  }
}
export default formSubmission
