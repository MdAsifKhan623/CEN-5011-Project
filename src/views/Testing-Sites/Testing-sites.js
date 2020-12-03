import React,{useState,useEffect,useRef} from 'react'
import TabHeader from '../tabHeader'
import {Container, Row, Col,Form, Button} from 'react-bootstrap'
import axios from 'axios'
import TestingSiteCard from './testingSiteCardToggle'
import {USstates} from '../CountyComponents/stateName'

export default function TestingSites(){
    const [stateName,setStateName]=useState('')
    const [testingSiteData, setTestingSiteData]=useState([])
    const [display, setDisplay]=useState(false)
    const [displayAutoSearch, setDisplayAutoSearch]=useState(false)
    const wRef=useRef(null)

    const handleSubmit=(e)=>{
       axios.post(`http://127.0.0.1:5000/testing`, { state:stateName.toLowerCase().replaceAll(' ','') })
      .then(res => {
        if (res.data.Item===undefined){
            setDisplay(true)
            setTestingSiteData({})
        }
        else{
            setTestingSiteData(res.data.Item.data)
            setDisplay(false)
        }
        
      })
      e.preventDefault()
    }
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

    
    const handleChange=(e)=>{
        setStateName(e.target.value)
    }
    const setName=(name)=>{
        setStateName(name)
        setDisplayAutoSearch(false)
    }
    return (
        <div ref={wRef}>
            <Container fluid>
                <center><TabHeader title='State Covid-19 Testing Sites'/></center>
                <br/>
                <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group controlId="formBasicPassword">
                    <br/>
                    <center>
                        <Form.Control className="country-field" 
                        value={stateName} onClick={()=>setDisplayAutoSearch(true)} 
                        onChange={handleChange} 
                        type="text" 
                        oncl
                        placeholder="Enter State Name" />
                        {display && (<div style={{'color':'red'}}>Please Provide correct state name.</div>)}
                        
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
                            {USstates.filter(name=>name.toLowerCase().indexOf(stateName.toLowerCase())>-1).map((ele,i)=>{
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
                    {!display && testingSiteData.map(function(item,i){
                        let opens_at=''
                        let closes_at=''
                        let phone_no=''
                        if ((item.regular_schedule).length>0){

                            opens_at=item.regular_schedule[0].opens_at
                            closes_at=item.regular_schedule[0].closes_at
                        }
                        if ((item.phones.length)>0){
                            phone_no=item.phones[0].number
                        }
                        if ((item.physical_address).length===0){
                            item.physical_address=[
                                {
                                    state_province:'',
                                    address_1:'',
                                    postal_code:''
                                }
                            ]
                        }
                            

                        return (
                        <Col key={i} xs="12" md='4'><TestingSiteCard 
                        obj={item} 
                        phone={phone_no} 
                        opens={opens_at} 
                        closes={closes_at}
                        />
                        <br/>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}