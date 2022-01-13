import './App.css';
//import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Navbar.Brand>
          {/* <img src={logo} /> */}
          Logo
        </Navbar.Brand>
      </Navbar>
      <div className='content'>

      </div>
    </div>
  );
}

export default App;