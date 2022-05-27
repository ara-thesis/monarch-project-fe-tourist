import React from 'react'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, FormGroup, Label, Input} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import airTerjun from '../components/imgs/airTerjun-geopark.jpg';
import tamnvan from '../components/imgs/architecswall.svg';
import Cards from './Cards';
import Itinerary from './Itenary_home';

const Body = () => {
    return(
        <>
        <Container>
      <h1 style={{ textAlign: 'center', marginTop: '0', fontFamily: 'Serif'}}>Welcome to Jakarta Signal</h1>      
        <br />
        <img src={airTerjun} alt="GambarAirTerjun" style={{height: '35rem', weight: '15rem', textAlign: 'center', borderRadius: '10px'}} />
        <br />
        <br /> 
        <p>
        Jakarta Signal is a website where you can plan your own schedule and find more fun place to visit. PLease watch our Promotional video <a href="https://youtu.be/ojQbArbuN4E">"The best Traveling website in Indonesia"</a> and don't forget to stay safe, and stay calm.
        </p>               
        <br />
        <Cards />
        <br />
        <Itinerary />        
        </Container>
        </>
    );
}

export default Body;