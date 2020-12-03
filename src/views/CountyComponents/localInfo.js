import React,{useState,useEffect,useRef} from 'react'
import TabHeader from '../tabHeader'
import {Container, Row, Col,Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {stateName,USstates} from './stateName'
import CountyCard from './countyToggleCard'

export default function LocalInfo(){
    const [formvalue,setValue]=useState('')
    const [apiCountyData,setCountyData]=useState({})
    const [countyData,setCountyInfo]=useState([])
    const [display,setDisplay]=useState(false)
    const [displayAutoSearch, setDisplayAutoSearch]=useState(false)
    const wRef=useRef(null)

    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const fetchUSData=(e)=>{
        axios.get('https://api.covidactnow.org/v2/counties.json?apiKey=c50a0970b11e4e5698159f28a81e52e3')
        .then((res)=>{
            setCountyData(res.data) 
        })
    }
    useEffect(()=>{
        fetchUSData()
    },[])

    useEffect(()=>{
        
        document.addEventListener('mousedown', handleClickOutside)
        
        return ()=>{
            console.log('removed')
            document.removeEventListener('mousedown',handleClickOutside)
        }
    },[wRef])
    const handleClickOutside = (event)=>{
        console.log('mousedown',wRef.current.contains(event.target))
        if(wRef.current && !wRef.current.contains(event.target)){
            setDisplayAutoSearch(false)
        }
    }

    const setName=(name)=>{
        setValue(name)
        setDisplayAutoSearch(false)
    }
    const handleSubmit=(e)=>{
        let countyInfo=[]
        apiCountyData.map((item)=>{
            let state=formvalue.replaceAll(' ','').toLowerCase()
            if(state in stateName){
                if (stateName[state]===item.state){
                    countyInfo.push(item)
                }
            }
        })
        if (countyInfo.length===0){
            setDisplay(true)
        }
        else{
            setDisplay(false)
        }
        setCountyInfo(countyInfo)
        e.preventDefault();
        
    }
    return (
        <div ref={wRef}>
            <Container fluid>
                <center><TabHeader title="County Covid-19 Data"/></center>
                <br/>
                <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Group controlId="formBasicPassword">
                    <br/>
                    <center>
                        <Form.Control className="country-field"
                         onChange={handleChange} 
                         onClick={()=>{
                             setDisplayAutoSearch(true)
                         }}
                         value={formvalue}
                         type="text" placeholder="Enter State Name" />
                        {display && (<div style={{'color':'red'}}>Please provide a valid US state name.</div>)}
                    </center>
                </Form.Group>
                <center>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </center> 
                </Form>
                <center>
                    <Row>
                        <Col>
                        {displayAutoSearch && <div className="autoContainer">
                            {USstates.filter(name=>name.toLowerCase().indexOf(formvalue.toLowerCase())>-1).map((ele,i)=>{
                                return(
                                    <div 
                                    className="option"
                                    onClick={()=>setName(ele)}
                                    key={i}
                                    tabIndex="0"
                                    >
                                    {ele}
                                    </div>
                                )
                            })}
                        </div>}
                        </Col>

                    </Row>
                </center>
                <br/>
                <Row>
                {countyData.map(function(item,i){
                return (
                <Col key={i} xs="12" md='3'><CountyCard obj={item}/>
                <br/>
                </Col>
                )
            })}
            </Row>
            </Container>
        </div>
    )
}