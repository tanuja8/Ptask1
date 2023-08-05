import './App.css';
import Header from './Component/Header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Fasion from './Component/Fasion';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Fasion></Fasion>
    </div>
  );
}

export default App;
