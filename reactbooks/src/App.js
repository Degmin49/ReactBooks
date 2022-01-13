import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark' sticky='top' expand='lg' collapseOnSelect>
        <Navbar.Brand>
          {/* <img src={logo} /> */}
          Logo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            {/* Customer */}
            <Nav.Link href='#x1'>Moja kolekcja książek</Nav.Link>
            {/* Admin */}
            <Nav.Link href='#x2'>Oczekujące na potwierdzenie</Nav.Link>
            <Nav.Link href='#x3'>Użytkownicy</Nav.Link>
            <Nav.Link href='#x4'>Książki</Nav.Link>
            {/* All */}
            <NavDropdown title='KONTO'>
              <NavDropdown.Item href='#x5'>Ustawienia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='x6'>Wyloguj/Zaloguj</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='content'>

      </div>
    </div>
  );
}

export default App;