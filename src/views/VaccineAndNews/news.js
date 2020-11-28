import React,{useState,useEffect} from 'react'
import {NewsCard} from '../totalCard'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import TabHeader from '../tabHeader'

export default function News(){
    let vaccineNews=<a href="/vaccine-news" style={{'textDecoration':'None'}}>Vaccine</a>
    const [newsData, setNewsData]=useState([])
    const fetchData=(e)=>{
        axios.get('https://newsapi.org/v2/everything?q=COVID+vaccine+today&sortBy=publishedAt&apiKey=c70b84aa4fde411f808f50858fff1da2&pageSize=100&page=1')
        .then((res)=>{
            setNewsData(res.data.articles)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs='12' md='6' lg='6'><center><TabHeader title="Covid-19 News"/></center></Col>
                    <Col xs='12' md='6' lg='6'><center><TabHeader title={vaccineNews}/></center></Col>
                </Row>
                
                <br/>
                <Row>
                {newsData.map(function(item,i){
                    return (
                    <Col key={i} xs="12" md='12'><NewsCard obj={item}/>
                    <br/>
                    </Col>
                    )
                })}
            </Row>
            </Container>
            
        </div>
    )
}