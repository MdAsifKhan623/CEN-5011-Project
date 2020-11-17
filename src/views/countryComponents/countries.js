import React,{useState, useEffect} from 'react'
import TabHeader from '../tabHeader'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {ImageCard,DiffCard} from '../totalCard'
import TotalCard from '../totalCard'

export default function Countries(){
    let covidPositiveCases, covidDeathCases,covidRecoveryCases,casesStatus, perMillionCard,testCard
    const [formvalue,setValue]=useState('')
    const [apiCountryData,setCountryData]=useState({})
    const [countryFlag,setCountryFlag]=useState('https://disease.sh/assets/img/flags/us.png')
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const fetchUSData=(e)=>{
        axios.get('https://disease.sh/v3/covid-19/countries/United%20States?yesterday=true&strict=true')
        .then((res)=>{
            setCountryData(res.data)
        })
    }
    useEffect(()=>{
        fetchUSData()
    },[])
    const handleSubmit=(e)=>{
        // const url="https://disease.sh/v3/covid-19/countries/"+{formvalue}+"?strict=true"
        // console.log(url)
        axios.get(`https://disease.sh/v3/covid-19/countries/${formvalue}?yesterday=true&strict=true`)
        .then((res)=>{
            setCountryData(res.data)
            setCountryFlag(res.data.countryInfo.flag)
        })
        console.log(apiCountryData)
        e.preventDefault();
        
    }
    if (Object.keys(apiCountryData).length !== 0){
        covidPositiveCases= <TotalCard title="Positive Cases" content={apiCountryData.cases} posVal={apiCountryData.todayCases}/>
        covidDeathCases=<TotalCard title="Death Cases" content={apiCountryData.deaths} posVal={apiCountryData.todayDeaths}/>
        covidRecoveryCases=<TotalCard title="Recovery Cases" content={apiCountryData.recovered} posVal={apiCountryData.todayRecovered}/>
        casesStatus=<DiffCard title="Cases Status" name1="Active:" cont1={apiCountryData.active} name2="Critical:" cont2={apiCountryData.critical}/>
        perMillionCard= <DiffCard title="Per Million Cases Counts" name2="Cases/Million:" name1="Deaths/Million:" cont1={apiCountryData.deathsPerOneMillion} cont2= {apiCountryData.casesPerOneMillion}/>
        testCard=<DiffCard title="Test Counts" name2="Test/Million:" name1="Tests:" cont1={apiCountryData.tests} cont2={apiCountryData.testsPerOneMillion}/>
    }
    
    return (
        <div>
        <Container fluid>
        <center><TabHeader title="Country Data"/></center>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicPassword">
                <br/>
                <center>
                    <Form.Control className="country-field" onChange={handleChange} type="text" placeholder="Enter Country Name" />
                </center>
            </Form.Group>
            <center>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </center>
            
        </Form>
        {console.log(apiCountryData)}
        <br/>
        <center>

        <ImageCard name={apiCountryData.country} continent={apiCountryData.continent} image={countryFlag}/>
        
        </center>
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
        </Container>

        </div>
    )
}