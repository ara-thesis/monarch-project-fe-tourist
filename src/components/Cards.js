import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = () => {
    return(
        <>
        <h4 style={{textAlign: 'center'}}>Recommendation</h4>
        <br />
        <Row>
        <Col md>
        <Card className='mb-3' style={{color: '#000', width: '12rem'}}>
          <Card.Img src='https://picsum.photos/seed/picsum/200/50' />
          <Card.Body>
            <Card.Title>First Card</Card.Title>
            <Card.Text style={{fontSize: '15px', textAlign: 'center'}}>
            Java Islands Recreation places
            </Card.Text>
            <Button variant='primary'>Let's Check it out</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col md>
        <Card className='mb-3' style={{color: '#000', width: '12rem'}}>
          <Card.Img src='https://picsum.photos/seed/picsum/200/50' />
          <Card.Body>
            <Card.Title>Second Card</Card.Title>
            <Card.Text style={{fontSize: '15px', textAlign: 'center'}}>
            Java Islands Recreation places
            </Card.Text>
            <Button variant='primary'>Let's Check it out</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col md>
        <Card className='mb-3' style={{color: '#000', width: '12rem'}}>
          <Card.Img src='https://picsum.photos/seed/picsum/200/50' />
          <Card.Body>
            <Card.Title>Third Card</Card.Title>
            <Card.Text style={{fontSize: '15px', textAlign: 'center'}}>
            Java Islands Recreation places
            </Card.Text>
            <Button variant='primary'>Let's Check it out</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col md>
        <Card className='mb-3' style={{color: '#000', width: '12rem'}}>
          <Card.Img src='https://picsum.photos/seed/picsum/200/50' />
          <Card.Body>
            <Card.Title>Fourth Card</Card.Title>
            <Card.Text style={{fontSize: '15px', textAlign: 'center'}}>
            Java Islands Recreation places
            </Card.Text>
            <Button variant='primary'>Let's Check it out</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col md>
        <Card className='mb-3' style={{color: '#000', width: '12rem'}}>
          <Card.Img src='https://picsum.photos/seed/picsum/200/50' />
          <Card.Body>
            <Card.Title>Fifth Card</Card.Title>
            <Card.Text style={{fontSize: '15px', textAlign: 'center'}}>
            Java Islands Recreation places
            </Card.Text>
            <Button variant='primary'>Let's Check it out</Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>
        </>
    );
}

export default Cards;