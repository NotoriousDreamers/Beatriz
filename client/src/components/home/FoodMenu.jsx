import React from "react";

const FoodMenu = () => (

  <center>
    <div>
      <center><h1 id="titletitle">Las especialidades de la casa</h1></center>
      <section className="foodMenu">
        <div className="row-1">
          <div className="col-md-4">

            <img id='foodMenuImgs' src="https://i.imgur.com/S4NdCiu.png?1" alt="Sopes"/>

          </div>
          <div className="col-md-4">

            <img id='foodMenuImgs' src="https://i.imgur.com/4V87vdI.jpg?1" alt="Huaraches"/>

          </div>
          <div className="col-md-4">

            <img id='foodMenuImgsRightColumn' src="https://i.imgur.com/a6JjDfc.jpg?1" alt="Tortillas Hechas A Mano"/>

          </div>
        </div>
        <div className="row-2">
          <div className="col-md-4">

            <img id='foodMenuImgs' src="https://i.imgur.com/GJD1Qww.jpg?1" alt="Jugos Frescos Al Momento"/>

          </div>
          <div className="col-md-4">

            <img id='foodMenuImgs' src="https://i.imgur.com/2bhIivl.jpg?1" alt="Tacos de Guisado"/>

          </div>
          <div className="col-md-4">

            <img id='foodMenuImgsRightColumn' src="https://i.imgur.com/APzHbSE.jpg?1" alt="Mas!!"/>

          </div>
        </div>
      </section>
    </div>
  </center>
);

export default FoodMenu;
