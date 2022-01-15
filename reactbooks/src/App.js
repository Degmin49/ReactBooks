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
import UsersPanel from './components/UsersPanel';
import OfficialBooks from './components/OfficialBooks';
import Settings from './components/Settings';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

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
              <Nav.Link as={Link} to={"/UsersPanel"}>Użytkownicy</Nav.Link>
              <Nav.Link as={Link} to={"/OfficialBooks"}>Książki</Nav.Link>
              {/* All */}
              <NavDropdown title='KONTO'>
                <NavDropdown.Item as={Link} to={"/Settings"}>Ustawienia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/Login"}>Zaloguj</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Logout"}>Wyloguj</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Register"}>Zarejestruj</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/MyBooks" element={<MyBooks/>} />
          <Route path="/WaitingBooks" element={<WaitingBooks/>} />
          <Route path="/UsersPanel" element={<UsersPanel/>} />
          <Route path="/OfficialBooks" element={<OfficialBooks/>} />
          <Route path="/Settings" element={<Settings/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Logout" element={<Logout/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;