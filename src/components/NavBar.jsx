import { useState } from 'react';
import {Button, Container, Navbar, Nav, NavDropdown, Offcanvas} from 'react-bootstrap';

function NavBar(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Button onClick={handleShow} className='d-block d-md-none'>
                    <span class="navbar-toggler-icon"></span>
                </Button>
                <Navbar className='d-none d-md-block'>
                <Nav className="ms-auto">
                    {/* margin: 0 auto >>> margin ml-auto mr-auto >>> center */}
                    {/* margin-left:auto : 오른쪽 정렬 */}
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">COMPANY</Nav.Link>
                    <Nav.Link href="#link">PRODUCT</Nav.Link>
                    <Nav.Link href="#link">BOARD</Nav.Link>
                </Nav>
                </Navbar>

                <Offcanvas show={show} onHide={handleClose} >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar;