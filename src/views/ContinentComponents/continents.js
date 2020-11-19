import React,{useState,useEffect} from 'react'
import TabHeader from '../tabHeader'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import TotalCard from '../totalCard'
import {DiffCard} from '../totalCard'
import Asia from './Asia'
import Africa from './Africa'
import SouthAmericaMap from './SouthAmerica'


export default function Continents(){
    let covidPositiveCases, covidDeathCases,covidRecoveryCases,casesStatus, perMillionCard,testCard
    const [formvalue,setValue]=useState('')
    const [continentData,setContinentData]=useState({})
    const handleSubmit=(e)=>{
        let url=`https://disease.sh/v3/covid-19/continents/${formvalue}?yesterday=true&strict=true`
        if (formvalue==="Australia/Oceania"){
            url='https://disease.sh/v3/covid-19/continents/Australia%2FOceania?yesterday=true&strict=true'
        }
        axios.get(url)
        .then((res)=>{
            setContinentData(res.data)
        })
        console.log(continentData)
        e.preventDefault();
    }
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const fetchData=(e)=>{
        axios.get('https://disease.sh/v3/covid-19/continents/North%20America?yesterday=true&strict=true')
        .then((res)=>{
            setContinentData(res.data)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    if (Object.keys(continentData).length !== 0){
        covidPositiveCases= <TotalCard title="Positive Cases" content={continentData.cases} posVal={continentData.todayCases}/>
        covidDeathCases=<TotalCard title="Death Cases" content={continentData.deaths} posVal={continentData.todayDeaths}/>
        covidRecoveryCases=<TotalCard title="Recovery Cases" content={continentData.recovered} posVal={continentData.todayRecovered}/>
        casesStatus=<DiffCard title="Cases Status" name1="Active:" cont1={continentData.active} name2="Critical:" cont2={continentData.critical}/>
        perMillionCard= <DiffCard title="Per Million Cases Counts" name2="Cases/Million:" name1="Deaths/Million:" cont1={continentData.deathsPerOneMillion} cont2= {continentData.casesPerOneMillion}/>
        testCard=<DiffCard title="Test Counts" name2="Test/Million:" name1="Tests:" cont1={continentData.tests} cont2={continentData.testsPerOneMillion}/>
    }
    return(
        <div>
            <Container fluid>
            <center><TabHeader title="Continent Data"/></center>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicPassword">
                    <br/>
                    <center>
                        <Form.Control className="country-field" onChange={handleChange} type="text" placeholder="Enter Continent Name" />
                    </center>
                </Form.Group>
                <center>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </center>
            </Form>
            <br/>
            <Row>
                <Col xs="12" md='4'>{covidPositiveCases}</Col>
                <Col xs="12" md='4'>{covidDeathCases}</Col>
                <Col xs="12" md='4'>{covidRecoveryCases}</Col>
            </Row>
            <br/>
            <Row>
                <Col xs="12" md='4'>{casesStatus}</Col>
                <Col xs="12" md='4'>{perMillionCard}</Col>
                <Col xs="12" md='4'>{testCard}</Col>
            </Row>
            <br/>
            <center>
                <Asia/>
                <Africa/>
                <SouthAmericaMap/>
            </center>
            </Container>
        </div>
    )
}