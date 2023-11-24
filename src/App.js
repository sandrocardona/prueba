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
    color:Array("secondary","danger"),
  };
  }
  
  aumenta = (btn) => {
      let cuantos = this.state.nombre;
      let farbe = this.state.color;

      if(farbe[btn]=="secondary"){
        farbe[btn]="danger"
        cuantos++;
      }

      this.setState({nombre:cuantos,color:farbe})
  }

  render(){
  return (
  <div className="App">
  <header className="App-header">
    </header><h1>Contador</h1>
    <Boton color={this.state.color[0]} nombre={this.state.nombre} fn={(x)=>this.aumenta(x)}></Boton>
    {" "}
    <Boton color={this.state.color[0]} nombre={this.state.nombre} fn={(x)=>this.aumenta(x)}></Boton>
    {" "}
    <Boton color={this.state.color[0]} nombre={this.state.nombre} fn={(x)=>this.aumenta(x)}></Boton>
    {" "}
    <Boton color={this.state.color[0]} nombre={this.state.nombre} fn={(x)=>this.aumenta(x)}></Boton>
    {" "}
    <Boton color={this.state.color[0]} nombre={this.state.nombre} fn={(x)=>this.aumenta(x)}></Boton>
  </div>
  );
  }
  }
export default App;
