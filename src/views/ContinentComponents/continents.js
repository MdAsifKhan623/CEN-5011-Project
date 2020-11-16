import React,{useState,useEffect} from 'react'
import TabHeader from '../tabHeader'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import TotalCard from '../totalCard'
import ContinentMap from './ContinentMapData'

export default function Continents(){
    function handleSubmit(){

    }
    function handleChange(){

    }
    return(
        <div>
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

            <ContinentMap/>
        </div>
    )
}