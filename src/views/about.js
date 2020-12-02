import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'


export default function About(){
    const style1={
        fontFamily:'Montserrat, sans-serif', 
        fontWeight:"bolder"
    }
    return (
        <div>
        <Container fluid>
            <Row>
                <Col className='about-heading'>
                    <center><h3 style={style1}>About this App</h3></center>
                    <div  className="about-app">
                        This application is designed to track the covid-19 pandemic with the global as well as local data of United States.
                        In addition to this feature, it also shows the current Covid-19 news with the status of different vaccines 
                        being developed across the globe. As for any United States resident, this application gives a clearer picture about
                        the pandemic in different states, counties and the testing centers across the states. 
                    </div>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col style={style1}><center><h3>Contributors</h3></center></Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Card className="card-pos-death" style={{  }}>
                        <Card.Body>
                            <Card.Title><h2>Mohammad Asif Khan</h2></Card.Title>
                            <Card.Subtitle className="mb-2 card-subtitle">Miami,FL</Card.Subtitle>
                            <Card.Text className="covid-counts">
                            Florida International University
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-pos-death" style={{  }}>
                        <Card.Body>
                            <Card.Title><h2>Mario Jacas Alfonso</h2></Card.Title>
                            <Card.Subtitle className="mb-2 card-subtitle">Miami,FL</Card.Subtitle>
                            <Card.Text className="covid-counts">
                            Florida International University
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-pos-death" style={{  }}>
                        <Card.Body>
                            <Card.Title><h2>Daniela Garcia</h2></Card.Title>
                            <Card.Subtitle className="mb-2 card-subtitle">Miami,FL</Card.Subtitle>
                            <Card.Text className="covid-counts">
                            Florida International University
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
        <br/><br/>
        <footer>
            <center>
                <p style={style1}>&copy; covid-19app.com</p>
            </center>
        </footer>
        </div>
    )
}