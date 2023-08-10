import './App.css';
import Header from './Component/Header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Slide from './Component/Slide';
import Store from './Component/Store';
import Tool from './Component/Tool';
import Product from './Component/Product';
import Pluging from './Component/Pluging';
function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Store />
      <Tool />
      <Product/>
      <Pluging/>
    </div>
  );
}

export default App;
