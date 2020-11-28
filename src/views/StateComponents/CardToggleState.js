import React from "react";
import SlideToggle from "react-slide-toggle";
import {Card} from 'react-bootstrap'
import {FaChevronDown} from 'react-icons/fa'

const StateCard = (props) => (
  <SlideToggle
    collapsed
    duration={800}
    render={({ onToggle, setCollapsibleElement, progress }) => (
      <div className="my-collapsible">
        <Card className="card-pos-death">
                <Card.Body className="state-Card">
                    <Card.Title><h2>{props.obj.state}</h2></Card.Title>
                    <Card.Subtitle className="mb-2 card-subtitle">+Today: {props.obj.todayCases}</Card.Subtitle>
                    <Card.Text className="covid-counts">
                    Cases: {props.obj.cases}
                    </Card.Text>
                </Card.Body>
        </Card>
        <button className="my-collapsible__toggle" onClick={onToggle}>
        <FaChevronDown style={{ fontSize:"25px", color:'blue'}}/>
        {/* <span className="number">{progress.toFixed(1)}</span> */}
        </button>
        <div className="my-collapsible__content" ref={setCollapsibleElement}>
          <div
            className="my-collapsible__content-inner"
            style={{
              transform: `translateY(${Math.round(20 * (-1 + progress))}px)`
            }}
          >
            
             <p className="state-covid-counts">Active: {props.obj.active}</p>
             <p className="state-covid-counts">Deaths: {props.obj.deaths}</p>
             <p className="state-covid-counts">Today Deaths: {props.obj.todayDeaths}</p>
             <p className="state-covid-counts">Cases/Million: {props.obj.casesPerOneMillion}</p>
             <p className="state-covid-counts">Deaths/Million: {props.obj.deathsPerOneMillion}</p>
             <p className="state-covid-counts">Recovered: {props.obj.recovered}</p>
             <p className="state-covid-counts">Tests: {props.obj.tests}</p>
             <p className="state-covid-counts">Tests/Million: {props.obj.testsPerOneMillion}</p> 
             <p className="state-covid-counts">Population: {props.obj.population}</p> 
              
          </div>
        </div>
      </div>
    )}
  />
);

export default StateCard