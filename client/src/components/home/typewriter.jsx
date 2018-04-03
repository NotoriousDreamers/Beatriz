import React from 'react';
import TypeWriter from 'react-typewriter';
import $ from "jquery";

class TypeWriteR extends React.Component {

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
              <img id='TacosBeatriz' src="https://i.imgur.com/gS6IPvN.png?2" alt="Logo del Restaurante"/>
            </div>
            <div>
              <TypeWriter typing={0.9}>
                The Mexican Revolution (Spanish: Revolución Mexicana) was a major armed struggle c.
                 1910–1920 radically transforming Mexican culture and government. Although recent
                research has focused on local and regional aspects of the Revolution, it was a
                "genuinely national revolution".[4] Its outbreak in 1910 resulted from the failure
                of the 35-year-long regime of Porfirio Díaz to find a managed solution to the
                presidential succession. This meant there was a political crisis among competing
                 elites and the opportunity for agrarian insurrection.[5] Wealthy landowner
                 Francisco I. Madero challenged Díaz in the 1910 presidential election, and following
                 the rigged results, revolted under the Plan of San Luis Potosí.
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

export default TypeWriteR;
