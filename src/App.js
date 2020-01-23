import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

/* function HelloWorld(props){
  //console.log(props)
  return (
  <div id="hello">{props.mytext}</div>
  )
} */

/* class HelloWorld extends React.Component {

  state={
    show:true
  }

  toogleShow= () =>{
    this.setState({show: !this.state.show})
  }
  
  render(){
      if (this.state.show){
        return(
          <div className="container">
            <h3>{this.props.subtitle}</h3>
            <h1>{this.props.mytext}</h1>
            <button onClick={this.toogleShow}>Toogle Show</button>
          </div>
  
        )
      }
      else{
        return (
        <div className="container"><h2>No retorno nada</h2>
          <button onClick={this.toogleShow}>Toogle Show</button>
        </div>)
      }
    }
} */

function App() {
  return (
    <div className="card">
      <NavBar/>
      This is my components: 
      {/* <HelloWorld mytext="Hello Ronald"/>
      <HelloWorld mytext="How are you"/>
      <HelloWorld mytext="?????"/> */}
    
      <Footer/>
    </div>
  );
}

/* function NavBar(){
  return (
   <div><Navbar bg="light" expand="lg">
   <Navbar.Brand href="#home">Commit SRL</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="mr-auto">
       <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#link">Link</Nav.Link>
       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
       </NavDropdown>
     </Nav>
     <Form inline>
       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
       <Button variant="outline-success">Search</Button>
     </Form>
   </Navbar.Collapse>
 </Navbar></div>
  );
} */

export default App;
