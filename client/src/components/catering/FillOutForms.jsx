import React from 'react';

class FillOutForm extends React.Component{
  constructor(props){
    super(props)
   this.state={
    fullName:'',
    phoneNumber:'',
    email:'',
    questions:''
  }

  this.add=this.add.bind(this);
  this.inputFullName=this.inputFullName.bind(this);
  this.inputEmail=this.inputEmail.bind(this);
  this.inputPhoneNumber=this.inputEmail.bind(this);
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
      <div>
    <h3>Nombre Completo</h3>:<input onChange={this.inputFullName} value={this.state.fullName}></input><br/>
    <h3>Correo Electronico</h3>:<input onChange={this.inputEmail} value={this.state.email}></input><br/>
    <h3>Numero de Telefono</h3>:<input onChange={this.inputPhoneNumber} value={this.state.phoneNumber}></input><br/>
    <h3>Preguntas o commentarios: <textarea onChange={this.inputQuestions} value={this.state.questions}></textarea></h3><br/>
    <button onClick={this.add} >Enviar</button>
  </div>)
  }
}

export default FillOutForm
