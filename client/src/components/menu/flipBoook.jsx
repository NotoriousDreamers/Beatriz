import React from 'react';
import FlipPage from 'react-flip-page';


const Menubonito = () => (

  <section className="headerRow">
    <div className="row-1">
      <div className="col-md-12">
        <FlipPage id='menuInteractivo'>
          <article>
            <h1>Desayunos</h1>
              <center><img id='beatriz' src="https://i.imgur.com/cWEMVV6.png" alt="Beatriz tipa"/></center>
          </article>
          <article>
            <h1>Comida</h1>
              <center><img id='panchito' src="https://i.imgur.com/TDsMveO.png" alt="Pancho tipo"/></center>
          </article>
          <article>
            <h1>My excellent third article</h1>
              <img id='TacosBeatriz' src="https://i.imgur.com/gS6IPvN.png?2" alt="Logo del Restaurante"/>
          </article>
        </FlipPage>
      </div>
    </div>
  </section>

)

export default Menubonito;
