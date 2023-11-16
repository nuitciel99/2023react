import {Button, Container, Row, Col} from 'react-bootstrap';

function Banner(){
    return(
        <div className='banWrap'>
            <Container className='py-3 py-md-5'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className='text-center text-white'>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad soluta voluptatum ipsa facilis culpa. Quod sed aperiam sunt ullam pariatur!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;