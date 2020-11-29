import React,{useState,useEffect} from 'react'
import TabHeader from '../tabHeader'
import {Container, Row, Col,Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {stateName} from './stateName'
import CountyCard from './countyToggleCard'

export default function LocalInfo(){
    const [formvalue,setValue]=useState('')
    const [apiCountyData,setCountyData]=useState({})
    const [countyData,setCountyInfo]=useState([])
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const fetchUSData=(e)=>{
        axios.get('https://api.covidactnow.org/v2/counties.json?apiKey=c50a0970b11e4e5698159f28a81e52e3')
        .then((res)=>{
            setCountyData(res.data)
        })
    }
    useEffect(()=>{
        fetchUSData()
    },[])
    const handleSubmit=(e)=>{
        let countyInfo=[]
        apiCountyData.map((item)=>{
            let state=formvalue.replaceAll(' ','').toLowerCase()
            if(state in stateName){
                if (stateName[state]===item.state){
                    countyInfo.push(item)
                }
            }
        })
        setCountyInfo(countyInfo)
        e.preventDefault();
        
    }
    return (
        <div>
            <Container fluid>
                <center><TabHeader title="County Covid-19 Data"/></center>
                <br/>
                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicPassword">
                    <br/>
                    <center>
                        <Form.Control className="country-field" onChange={handleChange} type="text" placeholder="Enter State Name" />
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
                {countyData.map(function(item,i){
                return (
                <Col key={i} xs="12" md='3'><CountyCard obj={item}/>
                <br/>
                </Col>
                )
            })}
            </Row>
            </Container>
        </div>
    )
}