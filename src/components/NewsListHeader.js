import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';


const NewsListHeader = () => {
    return(
        <Container>
        <div style={{ textAlign:'center' }}>
            <h1>List News</h1>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam nobis, officia est incidunt nihil repellendus facilis numquam, ipsa dolores labore error deleniti odit. Tempore magni blanditiis dolor debitis pariatur.
        </p>
        <br />
        <div style={{ textAlign:'left' }}>
        <Row>
                    <Card style={{width:'70rem'}}>
                        <Card.Header>The Great Asia Afrika</Card.Header>
                        <Card.Body>
                        <Card.Title>Messi liburan ke Bandung</Card.Title>
                        <Card.Text>
                        Messi dikabarkan terlihat di lokasi wisata The Great Asia Afrika, dia tampak sedang berlibur dengan keluarganya, yang tanpa diduga Messi pun sangat lihai dalam menggunakan bahasa Sunda. Setelah berbincang dengan Messi diketahui Messi rupanya akang-akang asli Bandung dengan nama Messi Tatang Jangkung.
                        </Card.Text>
                        <Button variant="primary">Baca selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card style={{width:'70rem'}}>
                        <Card.Header>Pantai pasir putih</Card.Header>
                        <Card.Body>
                        <Card.Title>Pasir di pantai pasir putih berubah menjadi merah ?</Card.Title>
                        <Card.Text>
                        Pada hari senin kemarin ditemukan sesuatu yang menggemparkan yaitu berubahnya warna pantai pasir putih menjadi merah, setelah ditelusuri..
                        </Card.Text>
                        <Button variant="primary">Baca selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Row>
        </div>
        </Container>
        
    )
}

export default NewsListHeader;