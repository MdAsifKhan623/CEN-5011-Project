import React from "react";
import SlideToggle from "react-slide-toggle";
import {Card} from 'react-bootstrap'
import {FaChevronDown} from 'react-icons/fa'

const TestingSiteCard = (props) => (

  <SlideToggle
    collapsed
    duration={800}
    render={({ onToggle, setCollapsibleElement, progress }) => (
      <div className="my-collapsible">
        <Card className="card-pos-death">
                <Card.Body className="state-Card">
                    <Card.Title><h3>{props.obj.name}</h3></Card.Title>
                    <Card.Subtitle className="mb-2 card-subtitle" style={{'color':'red', 'fontWeight':'bolder'}}>{props.obj.physical_address[0].state_province}</Card.Subtitle>
                    <Card.Text className="covid-counts-site">
                        Address: {props.obj.physical_address[0].address_1} 
                    </Card.Text>
                    <Card.Text className="covid-counts-site">
                        City: {props.obj.physical_address[0].city}
                    </Card.Text>
                    <Card.Text className="covid-counts-site">
                        ZIP Code: {props.obj.physical_address[0].postal_code}
                    </Card.Text>
                    <Card.Text className="covid-counts-site">
                        Phone No: {props.phone}
                    </Card.Text>
                    <Card.Text className="covid-counts-site">
                        Days: Opens Everyday
                    </Card.Text>
                    <Card.Text className="covid-counts-site">
                        Opens At: {props.opens}
                    </Card.Text>
                    <Card.Text className="covid-counts-site">
                        Closes At: {props.closes}
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
            
             <p className="state-covid-counts">Active: {props.obj.description}</p>
              
          </div>
        </div>
      </div>
    )}
  />
);

export default TestingSiteCard