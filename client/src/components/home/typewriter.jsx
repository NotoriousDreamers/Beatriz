import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from "jquery";

class YourReactClass extends React.Component {

  render() {
    return (
      // Passing in text.
      <center>
      <TypeWriter typing={0.4}>Hello World! How fast can this type because i dont see any effect</TypeWriter>
      </center>
    );
  }

}

export default YourReactClass;
