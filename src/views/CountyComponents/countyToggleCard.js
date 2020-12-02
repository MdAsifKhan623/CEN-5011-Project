import React from "react";
import SlideToggle from "react-slide-toggle";
import {Card} from 'react-bootstrap'
import {FaChevronDown} from 'react-icons/fa'

const CountyCard = (props) => (
  <SlideToggle
    collapsed
    duration={800}
    render={({ onToggle, setCollapsibleElement, progress }) => (
      <div className="my-collapsible">

        <Card className="card-News">
                <Card.Body className="vaccine-Card">
                <center>
                    <Card.Title><h4>{props.obj.county}</h4></Card.Title>
                    <Card.Subtitle className="mb-2 card-subtitle" style={{'color':'red', 'fontWeight':'bolder'}}>{props.obj.state}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 card-subtitle" style={{'color':'#bb2205', 'fontWeight':'bolder'}}>+ Cases Today: {props.obj.actuals.newCases}</Card.Subtitle>
                    <Card.Text className="covid-counts" style={{'color':'green', 'fontWeight':'bolder'}}>
                      Cases: {props.obj.actuals.cases} 
                    </Card.Text>
                    <Card.Text className="covid-counts" style={{'color':'green', 'fontWeight':'bolder'}}>
                      Deaths: {props.obj.actuals.deaths}
                    </Card.Text>
                    
                </center>
                </Card.Body>
        </Card>

        <button className="my-collapsible__toggle" onClick={onToggle}><label style={{ fontSize:"20px", color:'blue',fontWeight:"bolder"}}>Details</label>
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
            <Card.Text className="state-covid-counts" >
              Test Positivity Ratio: {props.obj.metrics.testPositivityRatio}
            </Card.Text>
            <Card.Text className="state-covid-counts" >
              Case Density: {props.obj.metrics.caseDensity}
            </Card.Text>
            <Card.Text className="state-covid-counts" >
              Infection Rate: {props.obj.metrics.infectionRate}
            </Card.Text>
            <Card.Text className="state-covid-counts" >
              Hospital Beds Capacity: {props.obj.actuals.hospitalBeds.capacity}
            </Card.Text>
            <Card.Text className="state-covid-counts" >
              ICU Beds Capacity: {props.obj.actuals.icuBeds.capacity}
            </Card.Text>
            <Card.Text className="state-covid-counts" >
              Last Updated Date: {props.obj.lastUpdatedDate}
            </Card.Text>
              
          </div>
        </div>
      </div>
    )}
  />
);

export default CountyCard