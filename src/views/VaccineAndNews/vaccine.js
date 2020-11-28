import React,{useState,useEffect} from 'react'
import VaccineCard from './vaccineToggleCard'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import TabHeader from '../tabHeader'

export default function Vaccine(){
    let covidNews=<a href="/news" style={{'textDecoration':'None'}}>Covid-19 News</a>
    const [vaccineData, setVaccineData]=useState([])
    const fetchData=(e)=>{
        axios.get('https://disease.sh/v3/covid-19/vaccine')
        .then((res)=>{
            setVaccineData(res.data.data)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs='12' md='6' lg='6'><center><TabHeader title={covidNews}/></center></Col>
                    <Col xs='12' md='6' lg='6'><center><TabHeader title="Vaccine"/></center></Col>
                </Row>
                
                <br/>
                <Row>
                {vaccineData.map(function(item,i){
                    return (
                    <Col key={i} xs="12" md='4'><VaccineCard obj={item}/>
                    <br/>
                    </Col>
                    )
                })}
            </Row>
            </Container>
            
        </div>
    )
}