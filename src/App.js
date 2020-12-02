import React from 'react';
import './App.css';
// import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './views/header'
import Dashboard from './views/dashboard'
import News from './views/VaccineAndNews/news'
import Continents from './views/ContinentComponents/continents'
import Countries from './views/countryComponents/countries'
import LocalInfo from './views/CountyComponents/localInfo'
import USStates from './views/StateComponents/usStates'
import TestingSites from './views/Testing-Sites/Testing-sites'
import Vaccine from './views/VaccineAndNews/vaccine'
import About from './views/about'
function App() {
  
  return (
    <Router>
    <div className="App">
          <header>
          <Header name="Covid-19 App"/>
          </header>
          <Switch>  
            <Route path="/" exact render={props=>
            <div>
              <Dashboard/>
            </div>
            }/>
            <Route path="/news" exact  component={News}/>
            <Route path="/countries" exact component={Countries}/>
            <Route path="/continents" exact component={Continents}/>
            <Route path="/county" exact component={LocalInfo}/>
            <Route path="/usstates" exact component={USStates}/>
            <Route path="/testing-sites" exact component={TestingSites}/>
            <Route path="/vaccine-news" exact component={Vaccine}/>
            <Route path='/about' exact component={About}/>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
