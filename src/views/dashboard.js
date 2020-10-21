import React from 'react'
import TotalCard from './totalCard'
import {Container, Row, Col} from 'react-bootstrap'
import TabHeader from './tabHeader'

export default function Dashboard(){
    return (
        <div>
        <Container fluid>
            <Row>
            <Col xs="12" md="6"> <TotalCard title="Total Positive Cases" content="36,786,784" posVal="1,989,090"/></Col>
            <Col xs="12" md="6"> <TotalCard title="Total Deaths" content="500,987" posVal="503" /></Col>
            </Row>
            <br/>
            <div>
            <center><TabHeader title="Covid Data Worldwide"/></center>
            </div>
            <br/>
            <Row>
            <Col md="6" lg="3" xs="12"><TotalCard title="United States" content="8,304,702" posVal="43,761"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="India" content="7,594,799" posVal="53,891"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Brazil" content="3,290,322" posVal="23,243"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Russia" content="1,911,498" posVal="12,672"/></Col>
            </Row>
            <br/>
            <Row>
            <Col md="6" lg="3" xs="12"><TotalCard title="Argentina" content="1,311,689" posVal="10,233"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Spain" content="1,009,328" posVal="9,898"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Colombia" content="990,892" posVal="9,006"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="France" content="910,902" posVal="8,909"/></Col>
            </Row>
            <br/>
            <Row>
            <Col md="6" lg="3" xs="12"><TotalCard title="Peru" content="868,675" posVal="3,126"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Mexico" content="854,926" posVal="3,699"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="United Kingdom" content="741,212" posVal="18,803"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="South Africa" content="705,254" posVal="1,461"/></Col>
            </Row>
            <br/>
      </Container>
        </div>
    )
}