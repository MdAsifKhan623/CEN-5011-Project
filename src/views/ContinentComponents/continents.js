import React,{useState,useEffect} from 'react'
import TabHeader from '../tabHeader'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import TotalCard from '../totalCard'
import ContinentMap from './ContinentMapData'

export default function Continents(){
    return(
        <div>
            {console.log(ContinentMap)}
            <ContinentMap/>
        </div>
    )
}