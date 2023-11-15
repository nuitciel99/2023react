import { useState } from 'react';
import './App.css'
import {vData} from './data.js'
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [myData, setMyData] = useState(vData)


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
      <div className='text-center mb-3'>
        <h3 className='title dot'>GALLERY</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <Row>
        {
          myData.map(function(item, i){
            return <CardView product={myData[i]} />
          })
        }
        
      </Row>
    </Container>


    </div>
  )
}

function CardView({product}){
  return(
    <>
      <Col sm={6} md={3} className='mb-2'>
        <Card>
          <Card.Img variant="top" src={`./img/${product.img}`} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.content}
              </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    </>
  )
}

export default App;
