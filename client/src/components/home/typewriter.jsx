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

            <img id='panchito' src="https://i.imgur.com/CN4TsM1.jpg" alt="Pancho tipo"/>


          </div>
          <div className="col-md-4">

            <TypeWriter typing={0.9}>The Mexican Revolution (Spanish: Revolución Mexicana) was a major armed struggle c. 1910–1920 radically transforming Mexican culture and government. Although recent research has focused on local and regional aspects of the Revolution, it was a "genuinely national revolution".[4] Its outbreak in 1910 resulted from the failure of the 35-year-long regime of Porfirio Díaz to find a managed solution to the presidential succession. This meant there was a political crisis among competing elites and the opportunity for agrarian insurrection.[5] Wealthy landowner Francisco I. Madero challenged Díaz in the 1910 presidential election, and following the rigged results, revolted under the Plan of San Luis Potosí.[6] Armed conflict ousted Díaz from power and a new election was held in 1911, bringing Madero to the presidency.

</TypeWriter>

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
