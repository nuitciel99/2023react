import {Button, Container, Row, Col} from 'react-bootstrap';
import { FaLightbulb } from "react-icons/fa6";
import { FaHighlighter } from "react-icons/fa";

function Content(){

    return(
        <Container className='mb-5'>
            <h3>The Udacity Adventage</h3>
            <Row>
                {/* sx 기본 12 
                    justify-content-md-start : md 이상일 때 start
                */}
                <Col sx={12} md={6} className='order-2 order-md-1 d-flex align-items-end justify-content-center justify-content-md-start'>
                    {/* d-flex flex-column align-items-center : center */}
                    {/* flex-column >>> align-items-center */}
                    <div className="d-flex flex-column align-items-center align-items-md-start">
                        <div className="icon mb-3">
                            <FaLightbulb style={ {color:"white", fontSize:"2em"} } />
                        </div>
                        <div className='text-center text-md-start'>
                            <h4>title</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Col>
                <Col sx={12} md={6} className='banner position-relative order-1 order-md-2'>
                    <img src="./img/img01.png" alt="" className='img0101' style={ {left:"10px", top:"10px"} } />
                    <img src="./img/img02.png" alt="" className='img0102' style={ {right:"10px", bottom:"10px"} } />
                </Col>
            </Row>
            <Row>
                {/* sx 기본 12 */}
                <Col sx={12} md={6} className='bg-dark rounded'>2
                </Col>
                <Col sx={12} md={6} className=' '>
                    {/* d-flex flex-column align-items-center : center */}
                    {/* flex-column >>> align-items-center */}
                    <div className="banner d-flex flex-column align-items-center align-items-md-start">
                        <div className="icon">
                            <FaHighlighter style={ {color:"white", fontSize:"2em"} } />
                        </div>
                        <div className='text-center text-md-start'>
                            <h4>title</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Content;