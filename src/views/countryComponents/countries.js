import React,{useState, useEffect} from 'react'
import TotalCard from '../totalCard'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

export default function Countries(){
    const [formvalue,setValue]=useState('')
    const [apiCountryData,setCountryData]=useState({})

    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        // const url="https://disease.sh/v3/covid-19/countries/"+{formvalue}+"?strict=true"
        // console.log(url)
        axios.get(`https://disease.sh/v3/covid-19/countries/${formvalue}?yesterday=true&strict=true`)
        .then((res)=>{
            setCountryData(res.data)
            
        })
        console.log(apiCountryData)
        e.preventDefault();
        
    }
    
    return (
        <div>
        <Container fluid>
        <form onSubmit={handleSubmit}>
                <label>
                    Enter the Country Name:
                    <input type="text" value={formvalue} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
        
            </form>
        </Container>

        </div>
    )
}