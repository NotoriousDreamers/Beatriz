import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from "jquery";

class YourReactClass extends React.Component {

  render() {
    return (
      // Passing in text.

      <section className="foodMenu">
        <div className="row-1">
          <div className="col-md-4">

              <h3>"Left column 1st row"</h3>

          </div>
          <div className="col-md-4">

            <TypeWriter typing={0.4}>Hello World! How fast can this type because i dont see any effect</TypeWriter>

          </div>
          <div className="col-md-4">

              <h3>"Right column 1st row"</h3>

          </div>
        </div>
      </section>


    );
  }

}

export default YourReactClass;
