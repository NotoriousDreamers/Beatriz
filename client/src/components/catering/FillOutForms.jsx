import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

class FillOutForm extends React.Component{
  constructor(props){
    super(props)
   this.state={
    fullName:'',
    email:'',
    phoneNumber:'',
    questions:''
  }

  this.add=this.add.bind(this);
  this.inputFullName=this.inputFullName.bind(this);
  this.inputEmail=this.inputEmail.bind(this);
  this.inputPhoneNumber=this.inputPhoneNumber.bind(this);
  this.inputQuestions=this.inputQuestions.bind(this);
  }
  inputFullName(e){
    this.setState({
      fullName:e.target.value
    })
  }
  inputEmail(e){
    this.setState({
      email:e.target.value
    })
  }

  inputPhoneNumber(e){
    this.setState({
      phoneNumber:e.target.value
    })
  }

  inputQuestions(e){
    this.setState({
      questions:e.target.value
    })
  }
  add(){
    this.props.addInfo(this.state.fullName,this.state.email, this.state.phoneNumber,this.state.questions);
     this.setState({
      fullName:'',
      email:'',
      phoneNumber:'',
      questions:''
    })
  }
  render(){
    return(

<section id="catering">
<div className="row-1">
<div className="col-sm-6">
  <div id='Banquetes'>
<center>  Banquetes </center>
  </div>
  <div id='subtitle'>
  <center className="TitulosYHeaders">NUESTRO SERVICIO DE BANQUETES </center>
  </div>
      <h4 className="TextosComunes">  ADEMAS DE OFRECERLE A NUESTROS CLIENTES NUESTRO EXCELENTES PLATILLOS A LA CARTA, CONTAMOS TAMBIEN CON SERVICIO DE BANQUETES  PARA  CUALQUIER FIESTA 0 EVENTO.</h4><br/>


<h4 className="TextosComunes">PARA SERVICIO A DOMICILIO, FAVOR DE COMUNICARSE A LAS OFICINAS CENTRALES,
 TENEMOS EL SERVICIO DE TAQUIZA TRADICIONAL Y EL SERVICIO COMPLETO ; CON MESAS, SILLAS, MESEROS, Y MONTAJE ESPECIAL PARA CADA TIPO DE EVENTO.</h4><br/>

<h4 className="TextosComunes">ESTAMOS SITUADOS EN LA ROMA AUN LADO DEL HOSPITAL DALINDE </h4><br/>
</div>
<div className="col-sm-6">


    <center>
      <h4 className="TextosComunes">Para cualquier cotización, duda o sugerencia, favor de llenar la siguiente forma, y nos pondremos en contacto a la brevedad con usted.</h4>
          <Grid item xs={6}>
                  <h3 className="TitulosYHeaders">Nombre Completo:</h3><input onChange={this.inputFullName} value={this.state.fullName}></input><br/>
                  <h3 className="TitulosYHeaders">Correo Electronico:</h3><input onChange={this.inputEmail} value={this.state.email}></input><br/>
                  <h3 className="TitulosYHeaders">Numero de Telefono:</h3><input onChange={this.inputPhoneNumber} value={this.state.phoneNumber}></input><br/>
                  <h3 className="TitulosYHeaders">Mensaje:<br/><textarea onChange={this.inputQuestions} value={this.state.questions}></textarea></h3>
                  <button onClick={this.add} >Enviar</button>
        </Grid>
   </center>

</div>

</div>
</section>

    )
  }
};

export default FillOutForm;
