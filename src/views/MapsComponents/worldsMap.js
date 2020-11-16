import React,{useState,useEffect} from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionMaps from 'fusioncharts/maps/es/fusioncharts.world';
import World from 'fusioncharts/fusioncharts.maps'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {continentDict} from './dictData'
import axios from 'axios'

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

//STEP 2 - Define the dataset and the colorRange of the map

let dataset1= []

const colorrange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
        "minvalue": "10000.0",
        "maxvalue": "50000.0",
        "color": "#96d674"
    },
    {
        "minvalue": "50000.0",
        "maxvalue": "150000.0",
        "color": "#0f4a0f"
    },
    {
        "minvalue": "150000.0",
        "maxvalue": "500000.0",
        "color": "#0f4a2d"
    },
     {
        "minvalue": "500000.0",
        "maxvalue": "1000000.0",
        "color": "#097572"
    },
    {
        "minvalue": "1000000.0",
        "maxvalue": "5000000.0",
        "color": "#090c4a"
    },
    {
        "minvalue": "5000000.0",
        "maxvalue": "10000000.0",
        "color": "#af74e3"
    },
     {
        "minvalue": "10000000.0",
        "maxvalue": "12500000.0",
        "color": "#e37474"
    },
    {
        "minvalue": "12500000.0",
        "maxvalue": "15000000.0",
        "color": "#c22d0c"
    },
    {
        "minvalue": "15000000.0",
        "maxvalue": "20000000.0",
        "color": "#9e1f03"
    }]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'world', // The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Map Configuration
        "chart": {
            "caption": "Continents Total covid-19 Cases",
            "subcaption": "Asia(AS)North America(NA)South America(SA)Australia(AU)Europe(EU)Africa(AF)",
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


// STEP 3 - Creating the DOM element to pass the react-fusioncharts component

export default function CovidWorldMap(){
    const [continentData, setContinentData]=useState({})
    const fetchData=()=>{
        axios.get('https://disease.sh/v3/covid-19/continents?yesterday=true')
        .then((res)=>{
            setContinentData(res.data)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    if ((Object.keys(continentData).length !== 0) && (dataset1.length === 0)){
        continentData.map((item)=>{
            console.log(item.continent)
            dataset1.push({
                "ID":continentDict.get(item.continent),
                'value':item.cases,
                'showLabel':'1'
            })
        })
    } 

    if (dataset1.length === 0){
        chartConfigs.dataSource.data=dataset1
    }
    return ( <
        ReactFC {
            ...chartConfigs
        }
        />
    );
} 