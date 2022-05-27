import React from 'react';
import { Breadcrumb, Alert, Button } from 'react-bootstrap';

const Itinerary = () => {
    return(
        <>
        <Breadcrumb >
          <Breadcrumb.Item>CS 1</Breadcrumb.Item>
          <Breadcrumb.Item>CS 2</Breadcrumb.Item>
          <Breadcrumb.Item>CS 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='info'>This is supposed to be a warning for user to use itinerary</Alert>
        <Button>Go to Itinerary</Button>
        </>
    )
}

export default Itinerary;