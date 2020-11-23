import React, { useEffect, useState } from 'react'
import StateCard from './CardToggleState'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import TabHeader from '../tabHeader'


export default function USStates(){
    const [stateData, setStateData]=useState([])
    const fetchData=()=>{
        axios.get('https://disease.sh/v3/covid-19/states?yesterday=true')
        .then((res)=>{
            setStateData(res.data)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>

        <Container fluid>
            <center><TabHeader title="United States State Data"/></center>
            <br/>
            <Row>
            {stateData.map(function(item,i){
                return (
                <Col key={i} xs="12" md='3'><StateCard obj={item}/>
                <br/>
                </Col>
                )
            })}
            </Row>
            
        </Container>                
        </div>
    )
}