import React from "react";
import SlideToggle from "react-slide-toggle";
import {Card} from 'react-bootstrap'

const StateCard = () => (
  <SlideToggle
    duration={800}
    render={({ onToggle, setCollapsibleElement, progress }) => (
      <div className="my-collapsible">
        <Card className="card-pos-death" style={{  }}>
                <Card.Body>
                    <Card.Title><h2>Texas</h2></Card.Title>
                    <Card.Subtitle className="mb-2 card-subtitle">+Today: 221</Card.Subtitle>
                    <Card.Text className="covid-counts">
                    120030
                    </Card.Text>
                </Card.Body>
        </Card>
        <button className="my-collapsible__toggle" onClick={onToggle}>
          toggle <span className="number">{progress.toFixed(1)}</span>
        </button>
        <div className="my-collapsible__content" ref={setCollapsibleElement}>
          <div
            className="my-collapsible__content-inner"
            style={{
              transform: `translateY(${Math.round(20 * (-1 + progress))}px)`
            }}
          >
            <p>
              Collapsible content, you can reverse the toggle before it has
              finished.
            </p>
            <a
              href="https://github.com/kunukn/react-slide-toggle"
              target="_blank"
            >
              react slide toggle - github
            </a>
          </div>
        </div>
      </div>
    )}
  />
);

export default StateCard