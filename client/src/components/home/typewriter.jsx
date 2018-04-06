import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from "jquery";

class TypeWriteR extends React.Component {

  render() {
    return (
      <section className="foodMenu">
        <div className="row-1">
          <div className="col-md-4">

            <center><img id='beatriz' src="https://i.imgur.com/cWEMVV6.png" alt="Beatriz tipa"/></center>

          </div>
          <div className="col-md-4">
            <div>
              <img id='TacosBeatriz' src="https://i.imgur.com/gS6IPvN.png?2" alt="Logo del Restaurante"/>
            </div>
          </div>
          <div className="col-md-4">

            <center><img id='panchito' src="https://i.imgur.com/TDsMveO.png" alt="Pancho tipo"/></center>

          </div>
        </div>
      </section>


    );
  }

}

export default TypeWriteR;
