import React from 'react'
import {Card} from 'react-bootstrap'

export default function TabHeader(props){
    return (
        <div>
            <Card className="card-tab-header">
                <Card.Body>
                    <Card.Title><h2>{props.title}</h2></Card.Title>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    )
}