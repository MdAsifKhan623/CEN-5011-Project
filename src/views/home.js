import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import TotalCard from './totalCard'

export default function home(){
    return(<div>
        <Container fluid>
                <Row>
                    <Col>
                        <TotalCard/>
                    </Col>
                    <Col>
                        <TotalCard/>
                    </Col>
                </Row>
        </Container>
    </div>)
}