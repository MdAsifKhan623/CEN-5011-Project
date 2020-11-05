import React,{useState,useEffect} from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './views/header'
import Dashboard from './views/dashboard'
import axios from 'axios'
import News from './views/news'
import Continents from './views/continents'
import Countries from './views/countries'
import LocalInfo from './views/localInfo'

function App() {
  const [initialData, setInitialData]=useState([{}])
  const [countryData,setCountryData]=useState({})
  useEffect(()=>{
    axios.get('https://disease.sh/v3/covid-19/all?yesterday=true')
    .then(res=>{
          // console.log(res)
          const temp=res.data
          setCountryData(temp)
    })    
  },[])
  return (
    <Router>
    <div className="App">
      {console.log(countryData)}
          <Header/>

          <Switch>  
            <Route path="/" exact component={Dashboard}/>
            <Route path="/news" exact  component={News}/>
            <Route path="/countries" exact component={Countries}/>
            <Route path="/continents" exact component={Continents}/>
            <Route path="/county" exact component={LocalInfo}/>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
