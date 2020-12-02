import React,{useState} from 'react'
import TabHeader from '../tabHeader'
import {Container, Row, Col,Form, Button} from 'react-bootstrap'
import axios from 'axios'
import TestingSiteCard from './testingSiteCardToggle'

export default function TestingSites(){
    const [stateName,setStateName]=useState('')
    const [testingSiteData, setTestingSiteData]=useState([])
    const handleSubmit=(e)=>{
       axios.post(`http://127.0.0.1:5000/testing`, { state:stateName.toLowerCase().replaceAll(' ','') })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setTestingSiteData(res.data.Item.data)
      })
      e.preventDefault()
    }
    const handleChange=(e)=>{
        setStateName(e.target.value)
    }
    return (
        <div>
            <Container fluid>
                <center><TabHeader title='State Covid-19 Testing Sites'/></center>
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
                    {testingSiteData.map(function(item,i){
                        let opens_at=''
                        let closes_at=''
                        let phone_no=''
                        if ((item.regular_schedule).length>0){

                            opens_at=item.regular_schedule[0].opens_at
                            closes_at=item.regular_schedule[0].closes_at
                        }
                        if ((item.phones.length)>0){
                            phone_no=item.phones[0].number
                        }
                        return (
                        <Col key={i} xs="12" md='4'><TestingSiteCard obj={item} phone={phone_no} opens={opens_at} closes={closes_at}/>
                        <br/>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}