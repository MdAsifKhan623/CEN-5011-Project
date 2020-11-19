import React from 'react'
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionMaps from 'fusioncharts/fusioncharts.maps'
import SouthAmerica from 'fusionmaps/maps/fusioncharts.southamerica'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';



ReactFC.fcRoot(FusionCharts, SouthAmerica,FusionMaps, FusionTheme);

let dataset1=[]

 const colorrange = {
    "minvalue": "0",
    // "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
        "minvalue": "0.0",
        "maxvalue": "0.0",
        "color": "#FFD74D"
    },]
};


const chartConfigs = {
    type: 'South America', // The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Map Configuration
        "chart": {
            "caption": "StateWise Covid Cases Cases",
            "subcaption": " 1955-2015",
            "numbersuffix": "",
            "includevalueinlabels": "1",
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

export default function SouthAmericaMap(){
    return(
        <div>
            <ReactFC {...chartConfigs}/>
        </div>
    )
}
