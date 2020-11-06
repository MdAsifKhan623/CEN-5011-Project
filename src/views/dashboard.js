import React,{useState, useEffect} from 'react'
import TotalCard from './totalCard'
import {Container, Row, Col} from 'react-bootstrap'
import TabHeader from './tabHeader'
import axios from 'axios'

function Dashboard(){
    let globalCases, deathCases,unitedStatesCases
    const [countryData,setCountryData]=useState({
        totalCases:{},
        usCases:{},
        usStates:{}
    })
     
    const fetchData=()=>{
        const totalCase=axios.get('https://disease.sh/v3/covid-19/all?yesterday=true')
        const usCases=axios.get('https://disease.sh/v3/covid-19/countries/United%20States?strict=true')
        const stateCases=axios.get('https://disease.sh/v3/covid-19/states')
        axios.all([totalCase,usCases,stateCases])
        .then(axios.spread((...res)=>{
           setCountryData({totalCases:res[0].data,usCases:res[1].data, usStates:res[2].data})
        }))
        .catch(err=>{
            console.log(err)
        })
      }
    
    useEffect(()=>{ 
        fetchData()
    },[])

    if (Object.keys(countryData.totalCases).length !== 0){
        globalCases= <TotalCard title="Total Positive Cases" content={countryData.totalCases.cases} posVal={countryData.totalCases.todayCases}/>
        deathCases= <TotalCard title="Total Death Cases" content={countryData.totalCases.deaths} posVal={countryData.totalCases.todayDeaths}/>
    }
    if (Object.keys(countryData.usCases).length !== 0){
        unitedStatesCases= <TotalCard title="Total Positive Cases" content={countryData.usCases.cases} posVal={countryData.usCases.todayCases}/>
    }
    return (
        <div>
        {console.log("Hello there! wtf")}
        <Container fluid>
            <div>
            <center><TabHeader title="Global Covid-19 Data"/></center>
            </div>
            <br/>
            
            <Row>
            <Col xs="12" md="6"> {globalCases} </Col>
            <Col xs="12" md="6"> {deathCases}</Col>
            </Row>
            <br/>
            <div>
            <center><TabHeader title="United States Covid-19 Data"/></center>
            </div>
            <br/>
            <Row>
            <Col md="6" lg="3" xs="12"><TotalCard title="United States" content="8,304,702" posVal="43,761"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="India" content="7,594,799" posVal="53,891"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Brazil" content="3,290,322" posVal="23,243"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Russia" content="1,911,498" posVal="12,672"/></Col>
            </Row>
            <br/>
            <Row>
            <Col md="6" lg="3" xs="12"><TotalCard title="Argentina" content="1,311,689" posVal="10,233"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Spain" content="1,009,328" posVal="9,898"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Colombia" content="990,892" posVal="9,006"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="France" content="910,902" posVal="8,909"/></Col>
            </Row>
            <br/>
            <Row>
            <Col md="6" lg="3" xs="12"><TotalCard title="Peru" content="868,675" posVal="3,126"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="Mexico" content="854,926" posVal="3,699"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="United Kingdom" content="741,212" posVal="18,803"/></Col>
            <Col md="6" lg="3" xs="12"><TotalCard title="South Africa" content="705,254" posVal="1,461"/></Col>
            </Row>
            <br/>
      </Container>
        </div>
    )
    
}

export default Dashboard