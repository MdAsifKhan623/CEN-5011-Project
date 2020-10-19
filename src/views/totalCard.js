import React from 'react'
import {Card} from 'react-bootstrap'

export default function TotalCard(props){
    return (<div>
            <Card className="card-pos-death" style={{  }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    {props.content}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
    </div>)
}