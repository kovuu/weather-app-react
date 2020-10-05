
import React from 'react';
import {Line} from 'react-chartjs-2';



const data = {

    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Average Temp',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            labelString: 'c'
        }
    ]
};

export default class extends React.Component{

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let labels = [], temps = [];
        const forecasts = nextProps.forecasts;
        // eslint-disable-next-line array-callback-return
        forecasts.map(forecast => {
            if (forecast.units === 'days') {
                labels.push(forecast.day);
            } else {
                labels.push(forecast.hours + 'h');
            }
            temps.push(forecast.temp);
        });
        data.labels = labels;
        data.datasets[0].data = temps;
        return true;
    }


    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Temperature chart</h1>
                {this.props.forecasts && <Line data={data} options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    callback: function (value, index, values) {
                                        return value + 'C°'
                                    }
                                },
                            }]
                        }
                    }}
                />}
            </div>
        );
    }
};



