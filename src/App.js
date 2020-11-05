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
    axios.get('https://corona.lmao.ninja/v2/countries/india')
    .then(res=>{
          // console.log(res)
          const temp=res.data
          setCountryData(temp)
    })    
  },[])
  return (
    
    <div className="App">
      {console.log(countryData)}
      <Router>
          <Switch>
            <Route exact path="/" render={ props=>
              <div>
                <Header/>
                <Dashboard/>
              </div>
              }/>
              <Route exact path="/news" component={News}/>
              <Route exact path="/countries" component={Countries}/>
              <Route exact path="/continents" component={Continents}/>
              <Route exact path="/county" component={LocalInfo}/>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
