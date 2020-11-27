import React,{useState,useEffect} from 'react'
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionMaps from 'fusioncharts/maps/es/fusioncharts.usa';
import USA from 'fusioncharts/fusioncharts.maps'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import axios from 'axios'
import stateDict from './dictData'


ReactFC.fcRoot(FusionCharts, FusionMaps, USA, FusionTheme);

let dataset1=[]

 const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
        "minvalue": "50000.0",
        "maxvalue": "100000.0",
        "color": "#FFD74D"
    }, {
        "minvalue": "100000.0",
        "maxvalue": "500000.0",
        "color": "#FB8C00"
    }, {
        "minvalue": "500000.0",
        "maxvalue": "1000000.0",
        "color": "#E65100"
    },{
        "minvalue":'1000000.0',
        'maxvalue':'1500000.0',
        'color':'#fb0000'
    }]
};


const chartConfigs = {
    type: 'USA', // The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Map Configuration
        "chart": {
            "caption": "StateWise Covid Cases",
            "subcaption": " 1955-2015",
            "numbersuffix": "",
            "includevalueinlabels": "0",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorrange,
        // Source data as JSON --> id represents countries of the world.
        "data": dataset1
    }
}

export default function CovidUSMap(){
    const [stateCases,setStateCase]=useState({})
    const fetchDataFromAPI=()=>{
        axios.get('https://disease.sh/v3/covid-19/states')
        .then((res)=>{
            setStateCase(res.data)
        })
    }
    useEffect(()=>{
        fetchDataFromAPI()
    },[])
    if ((Object.keys(stateCases).length !== 0) && (dataset1.length) === 0){
        stateCases.map((item)=>{
           dataset1.push({
               "Label":item.state,
               'ID':stateDict.get(item.state),
               "value":item.cases,
               "showLabel":'1'
           })
        })
    }
    if (dataset1.length === 0){
        chartConfigs.dataSource.data=dataset1
    }
    return (
            <ReactFC {...chartConfigs}/>
    )
}
