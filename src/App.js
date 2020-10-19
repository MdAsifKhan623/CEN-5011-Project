import React,{useState,useEffect} from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Header from './views/header'
import {Container, Row, Col} from 'react-bootstrap'
import TotalCard from './views/totalCard'

function App() {
  const [initialData, setInitialData]=useState([{}])
  useEffect(()=>{
    fetch('/home').then(
      response => response.json() 
    ).then(data=> setInitialData(data))
  },[])
  return (
    <div className="App">
      <div>
        <Header name="DASHBOARD" />
      </div>
      <Container fluid>
        <Row>
          <Col xs="12" md="6"> <TotalCard title="Total Positive Cases" content="36,786,784"/></Col>
          <Col xs="12" md="6"> <TotalCard title="Total Deaths" content="500,987" /></Col>
        </Row>
      </Container>
      <h1>{initialData.title}</h1>
    </div>
  );
}

export default App;
