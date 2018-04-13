import React from 'react';
import PackageList from './packageList.jsx'
import $ from 'jquery'
class Packages extends React.Component{
  constructor(props){
    super(props);
    this.state={
      packages:[]
    }

  }
  getpackage(){
  $.ajax({
    url: '/packages',
    method: 'GET',
    success: (results) => {
      this.setState({packages:results[0]});
    },
    error: (xhr, err) => {
      console.log('err', err);
    }
  })
  }

  componentDidMount() {
  this.getpackage();
  }
render(){
  return(<div>
  <PackageList packages={this.state.packages} />

  </div>
)}
}
export default Packages
