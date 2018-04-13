import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from "jquery";

class TypeWriteR2 extends React.Component {

  render() {
    return (
      // Passing in text.

      <section className="foodMenu">
        <div className="row-1">
          <div className="col-md-4">

            <center><img id='beatriz' src="https://i.imgur.com/cWEMVV6.png" alt="Beatriz tipa"/></center>

          </div>
          <div className="col-md-4">
            <div>
              <TypeWriter typing={0.9}>
                The Mexican Revolution (Spanish: Revolución Mexicana) was a major armed struggle c.
                 1910–1920 radically transforming Mexican culture and government. Although recent
                research has focused on local and regional aspects of the Revolution, it was a
                "genuinely national revolution".
              </TypeWriter>
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

export default TypeWriteR2;
