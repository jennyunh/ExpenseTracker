import "./Chart.css";
import React from 'react';
import ChartBar from "./ChartBar";

const Chart = props => {

    //change array of objects to an array of numbers. 
    //Take each datapoint and only use the object's value
const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
const totalMaximum = Math.max(...dataPointValues);

return <div className="chart">
{props.dataPoints.map(dataPoint => 

<ChartBar 
value={dataPoint.value} 
maxValue={totalMaximum} 
label={dataPoint.label} 
key={dataPoint.label}/>)}

</div>
}

export default Chart;