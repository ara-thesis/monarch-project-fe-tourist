import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const NewsListBody = () =>{
    return(
        <>
            <Container>
                <Row>
                    <Card>
                        <Card.Header>Olahraga</Card.Header>
                        <Card.Body>
                        <Card.Title>Mbappe stays in Paris-Saint German</Card.Title>
                        <Card.Text>
                        Mbappe menandatangani kontrak lagi dengan tim PSG, tanggal XX Mei 2021 pada konferensi pers PSG Mbappe di umumkan akan tetap stay di club PSG yang berarti Mbappe tidak jadi berpindah ke Club Real Madrid. Money over Passion ?
                        </Card.Text>
                        <Button variant="primary">Read</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default NewsListBody;