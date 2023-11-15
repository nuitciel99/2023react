import { useState } from 'react';
import './App.css'
import {vData, vData1} from './data.js'
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [viewData, setViewData] = useState(vData)
  const [viewData1, setViewData1] = useState(vData1)


  return(
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* margin: 0 auto >>> margin ml-auto mr-auto >>> center */}
            {/* margin-left:auto : 오른쪽 정렬 */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">COMPANY</Nav.Link>
            <Nav.Link href="#link">PRODUCT</Nav.Link>
            <Nav.Link href="#link">BOARD</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='visualWrap mb-3'>
      <Container className='py-4 text-white text-center'>
        <h3>Lorem, ipsum dolor.</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, neque.</p>

      </Container>
    </div>

    <Container>
      <h3 className='text-center mb-3'>GALLERY</h3>
      <Row>
        <Col sm={6} md={3} className='mb-2'>
        <Card>
          <Card.Img variant="top" src="./img/img01.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor.
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={6} md={3}>
        <Card>
          <Card.Img variant="top" src="./img/img02.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor.
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={6} md={3}>
        <Card>
          <Card.Img variant="top" src="./img/img03.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor.
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={6} md={3}>
        <Card>
          <Card.Img variant="top" src="./img/img04.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor.
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>

    {/* py 세로 : max 5
        py-md-5 : md 이상일 때 5
    */}
    <div className="contentWrap01 py-2 py-md-5">

      <Container className='mb-2 mb-md-5'>
        <h3 className='text-center mb-3'>GALLERY</h3>
        <Row>
          <Col sm={6} md={3} className='mb-2'>
          <Card>
            <Card.Img variant="top" src="./img/img01.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor.
                </Card.Text>
              </Card.Body>
          </Card>
          </Col>
          <Col sm={6} md={3}>
          <Card>
            <Card.Img variant="top" src="./img/img02.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor.
                </Card.Text>
              </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={3}>
          <Card>
            <Card.Img variant="top" src="./img/img03.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor.
                </Card.Text>
              </Card.Body>
          </Card>
          </Col>
          <Col sm={6} md={3} className='d-none d-md-block'>
          <Card>
            <Card.Img variant="top" src="./img/img04.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor.
                </Card.Text>
              </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>

    </div>
  )
}



export default App;
