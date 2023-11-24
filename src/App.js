import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import {React} from 'react';
import {Component} from 'react';

function Boton(props){
  return(
  <Button color={props.color} nombre={props.nombre} onClick={props.fn} >{props.nombre}</Button>
  )
}

class App extends Component{
  constructor(props) {
  super(props);
  this.state = {
    nombre:0,
    color:"secondary"
  };
  }
  
  aumenta = (nombreBoton) => {
      let c = this.state.nombre;
      c+=1;
      this.setState({nombre:c})
      this.setState({color:"danger"})
  }

  render(){
  return (
  <div className="App">
  <header className="App-header">
    </header><h1>Contador</h1>
    <Boton color={this.state.color} nombre={this.state.nombre} fn={()=>this.aumenta()}></Boton>
    {" "}
    <Boton color={this.state.color} nombre={this.state.nombre} fn={()=>this.aumenta()}></Boton>
    {" "}
    <Boton color={this.state.color} nombre={this.state.nombre} fn={()=>this.aumenta()}></Boton>
    {" "}
    <Boton color={this.state.color} nombre={this.state.nombre} fn={()=>this.aumenta()}></Boton>
    {" "}
    <Boton color={this.state.color} nombre={this.state.nombre} fn={()=>this.aumenta()}></Boton>
  </div>
  );
  }
  }
export default App;
