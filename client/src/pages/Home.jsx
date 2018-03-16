import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <h1>"This is in the Home page"</h1>
      </div>
    );
  }
}
