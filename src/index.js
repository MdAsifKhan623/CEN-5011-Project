import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/demo.css'
import Home from './views/home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import News from './views/news'

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route 
          path="/" 
          exact 
          render={()=><App/>}/>
        <Route 
          path="/dashboard"
          exact render={()=><Home/>}/>
        <Route
          path="/news"
          exact render={()=><News/>}
        />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);


