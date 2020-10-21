import React,{useState,useEffect} from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Header from './views/header'
import Dashboard from './views/dashboard'


function App() {
  const [initialData, setInitialData]=useState([{}])
  useEffect(()=>{
    fetch('/home').then(
      response => response.json() 
    ).then(data=> setInitialData(data))
  },[])
  return (
    <div className="App">
      <header>
        <Header name="DASHBOARD" />
      </header>
      <Dashboard/>
    </div>
  );
}

export default App;
