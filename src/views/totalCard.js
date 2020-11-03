import React from 'react'
import {Card} from 'react-bootstrap'

export default function TotalCard(props){
    return (<div>
            <Card className="card-pos-death" style={{  }}>
                <Card.Body>
                    <Card.Title><h2>{props.title}</h2></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">+ {props.posVal}</Card.Subtitle>
                    <Card.Text>
                    {props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
    </div>)
}