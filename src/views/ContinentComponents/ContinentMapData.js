import React from 'react'
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionMapsAsia from 'fusionmaps/maps/es/fusioncharts.asia';
import Asia from 'fusioncharts/fusioncharts.maps'
// import Europe from 'fusioncharts/fusioncharts.maps'
// import NorthAmerica from 'fusioncharts/fusioncharts.maps'
// import SouthAmerica from 'fusioncharts/fusioncharts.maps'
// import Australia from 'fusioncharts/fusioncharts.maps'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import FusionMapsEurope from 'fusionmaps/maps/es/fusioncharts.europe'
// import FusionMapsNorthAmerica from 'fusionmaps/maps/es/fusioncharts.northamerica'
// import FusionMapsSouthAmerica from 'fusionmaps/maps/es/fusioncharts.southamerica'
// import FusionMapsAustralia from 'fusionmaps/maps/es/fusioncharts.australia'

ReactFC.fcRoot(FusionCharts, FusionMapsAsia, Asia, FusionTheme);

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
    type: 'Asia', // The chart type
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

export default function ContinentMap(){
    return(
        <div>
            <ReactFC {...chartConfigs}/>
        </div>
    )
}
