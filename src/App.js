import React,{useState,useEffect} from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function App() {
  const [initialData, setInitialData]=useState([{}])
  useEffect(()=>{
    fetch('/home').then(
      response => response.json() 
    ).then(data=> setInitialData(data))
  },[])
  return (
    <div className="App">
      <Button className="danger" href='/dashboard'>Dashboard</Button>
      <h1>{initialData.title}</h1>
    </div>
  );
}

export default App;
