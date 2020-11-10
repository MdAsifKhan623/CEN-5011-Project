import React,{useState, useEffect} from 'react'
import TotalCard from './totalCard'
import {Container, Row, Col} from 'react-bootstrap'
import TabHeader from './tabHeader'
import axios from 'axios'
import CovidWorldMap from './MapsComponents/worldsMap'
import CovidUSMap from './MapsComponents/usCovidMap'

function Dashboard(){
    let globalCases, deathCases,unitedStatesCases,usDeathCases,globalRecoveryCases,usRecoveryCases
    const [countryData,setCountryData]=useState({
        totalCases:{},
        usCases:{},
    })
     
    const fetchData=()=>{
        const totalCase=axios.get('https://disease.sh/v3/covid-19/all?yesterday=true')
        // https://disease.sh/v3/covid-19/continents?yesterday=true
        const usCases=axios.get('https://disease.sh/v3/covid-19/countries/United%20States?yesterday=true&strict=true')
        // const stateCases=axios.get('https://disease.sh/v3/covid-19/states')
        axios.all([totalCase,usCases])
        .then(axios.spread((...res)=>{
           setCountryData({totalCases:res[0].data,usCases:res[1].data})
        }))
        .catch(err=>{
            console.log(err)
        })
      }
    
    useEffect(()=>{ 
        fetchData()
    },[])

    if (Object.keys(countryData.totalCases).length !== 0){
        globalCases= <TotalCard title="Positive Cases" content={countryData.totalCases.cases} posVal={countryData.totalCases.todayCases}/>
        deathCases= <TotalCard title="Death Cases" content={countryData.totalCases.deaths} posVal={countryData.totalCases.todayDeaths}/>
        globalRecoveryCases=<TotalCard title="Recovery Cases" content={countryData.totalCases.recovered} posVal={countryData.totalCases.todayRecovered}/>
    }
    if (Object.keys(countryData.usCases).length !== 0){
        unitedStatesCases= <TotalCard title="Positive Cases" content={countryData.usCases.cases} posVal={countryData.usCases.todayCases}/>
        usDeathCases=<TotalCard title="Death Cases" content={countryData.usCases.deaths} posVal={countryData.usCases.todayDeaths}/>
        usRecoveryCases=<TotalCard title="Recovery Cases" content={countryData.usCases.recovered} posVal={countryData.usCases.todayRecovered}/>
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
                <Col xs="12" md="4"> {globalCases} </Col>
                <Col xs="12" md="4"> {deathCases}</Col>
                <Col xs="12" md="4"> {globalRecoveryCases}</Col>
            </Row>
            <br/>
            <div>
                <center><TabHeader title="United States Covid-19 Data"/></center>
            </div>
            <br/>
            <Row>
                <Col xs="12" md="4"> {unitedStatesCases} </Col>
                <Col xs="12" md="4"> {usDeathCases}</Col>
                <Col xs="12" md="4">{usRecoveryCases} </Col>
            </Row>
            <br/>
            <Row>
                <Col md="6" lg="6" xs="12">
                    <CovidWorldMap/>
                </Col>
                <Col md="6" lg="6" xs="12">
                    <CovidUSMap/>
                </Col>
            </Row>
            <br/>
      </Container>
        </div>
    )
    
}

export default Dashboard