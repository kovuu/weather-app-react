import React, {useEffect, useRef, useState} from "react";
import Chartjs from 'chart.js';

const chartConfig =  {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "avg. Temperature",
                data: [22, 31, 26, 34, 28, 16, 22],
                backgroundColor: "rgb(112,182,195, .3)",
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5,
                    max: 100
                }
            }]
        },
    }
}

const Charts = () => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if(chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);

    return (
        <div style={{width: '60%', margin: '0 auto'}}>
            <canvas ref={chartContainer} />
        </div>
    )
}



export default Charts;

