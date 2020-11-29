import React from "react";
import SlideToggle from "react-slide-toggle";
import {Card} from 'react-bootstrap'
import {FaChevronDown} from 'react-icons/fa'

const VaccineCard = (props) => (
  <SlideToggle
    collapsed
    duration={800}
    render={({ onToggle, setCollapsibleElement, progress }) => (
      <div className="my-collapsible">

        <Card className="card-News">
                <Card.Body className="vaccine-Card">
                    <Card.Title><h4>{props.obj.candidate}</h4></Card.Title>
                    <Card.Subtitle className="mb-2 card-subtitle" style={{'color':'green'}}>Mechanism: {props.obj.mechanism}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 card-subtitle" style={{'color':'blue'}}>Sponsors: {props.obj.sponsors}</Card.Subtitle>
                    <Card.Text className="covid-counts">
                    <label style={{fontWeight:'bolder'}}>Trail Phase: {props.obj.trialPhase}</label>
                    </Card.Text>
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
             <p className="state-covid-counts" >{props.obj.details}</p>
              
          </div>
        </div>
      </div>
    )}
  />
);

export default VaccineCard