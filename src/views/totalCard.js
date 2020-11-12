import React from 'react'
import {Card} from 'react-bootstrap'

export default function TotalCard(props){
    return (<div>
            <Card className="card-pos-death" style={{  }}>
                <Card.Body>
                    <Card.Title><h2>{props.title}</h2></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">+Today: {props.posVal}</Card.Subtitle>
                    <Card.Text className="covid-counts">
                    {props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
    </div>)
}

function ImageCard(props){
    return(<div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.continent}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>)
}

function DiffCard(props){
    return (
        <div>
            <Card className="card-pos-death" style={{  }}>
                <Card.Body>
                    <Card.Title><h2>{props.title}</h2></Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">{props.posVal}</Card.Subtitle> */}
                    <Card.Text className="covid-counts">
                    {props.name1} {props.cont1}
                    </Card.Text>
                    <Card.Text className="covid-counts">
                    {props.name2} {props.cont2}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export {ImageCard,DiffCard}