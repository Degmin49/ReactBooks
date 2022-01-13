import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import MyBooks from './components/MyBooks';
import WaitingBooks from './components/WaitingBooks';
import Users from './components/Users';
import OfficialBooks from './components/OfficialBooks';
import Settings from './components/Settings';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar bg='dark' variant='dark' sticky='top' expand='lg' collapseOnSelect>
          <Navbar.Brand>
            {/* <img src={logo} /> */}
            Logo
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              {/* Customer */}
              <Nav.Link as={Link} to={"/MyBooks"}>Moja kolekcja książek</Nav.Link>
              {/* Admin */}
              <Nav.Link as={Link} to={"/WaitingBooks"}>Oczekujące na potwierdzenie</Nav.Link>
              <Nav.Link as={Link} to={"/Users"}>Użytkownicy</Nav.Link>
              <Nav.Link as={Link} to={"/OfficialBooks"}>Książki</Nav.Link>
              {/* All */}
              <NavDropdown title='KONTO'>
                <NavDropdown.Item as={Link} to={"/Settings"}>Ustawienia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/Login"}>Wyloguj/Zaloguj</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/MyBooks" element={<MyBooks/>} />
          <Route path="/WaitingBooks" element={<WaitingBooks/>} />
          <Route path="/Users" element={<Users/>} />
          <Route path="/OfficialBooks" element={<OfficialBooks/>} />
          <Route path="/Settings" element={<Settings/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </Router>
      
      <div className='content'>

      </div>
    </div>
  );
}

export default App;