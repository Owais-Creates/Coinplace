import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import './LineChart.css'

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        if (historicalData && historicalData.prices) {
            let copyData = [["Date", "Prices"]];
            historicalData.prices.forEach(item => {
                copyData.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
            });
            setData(copyData);
        }
    }, [historicalData]);

    return (
        <Chart 
            chartType='LineChart'
            data={data}
            height="100%"
            legendToggle
        />
    );
}

export default LineChart;
