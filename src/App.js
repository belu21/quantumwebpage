import React from 'react';
import './App.css';

/* function HelloWorld(props){
  //console.log(props)
  return (
  <div id="hello">{props.mytext}</div>
  )
} */

class HelloWorld extends React.Component {

  state={
    show:true
  }

  toogleShow= () =>{
    this.setState({show: !this.state.show})
  }
  
  render(){
      if (this.state.show){
        return(
          <div id="hello">
            <h3>{this.props.subtitle}</h3>
            <h1>{this.props.mytext}</h1>
            <button onClick={this.toogleShow}>Toogle Show</button>
          </div>
  
        )
      }
      else{
        return (
        <div><h2>No retorno nada</h2>
          <button onClick={this.toogleShow}>Toogle Show</button>
        </div>)
      }
    }
}

function App() {
  return (
    <div>
      This is my components: 
      <HelloWorld mytext="Hello Ronald"/>
      <HelloWorld mytext="How are you"/>
      <HelloWorld mytext="?????"/>
    </div>
  );
}

export default App;
