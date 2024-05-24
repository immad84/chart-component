import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Main } from './style';

const ChartDasboard = () => {
    const chartContainer = useRef(null);

    useEffect(() => {
        const ctx = chartContainer.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Feb 8', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14'],
                datasets: [{
                    label: 'Sample Data',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFBB02',
                    tension: 0.1,
                    
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 25, // Specify the step size between ticks
                            callback: function (value, index, values) {
                                return value + 'k'; // Custom tick label format, e.g., add '°' to each tick value
                            }
                        }
                    },
                    x: {
                        type: 'category'
                    }
                }
            }
        });

        return () => myChart.destroy(); // Cleanup function to destroy the chart when component unmounts
    }, []); // Empty dependency array to ensure useEffect runs only once

    return (
        <Main>

            <canvas className='chart' ref={chartContainer} ></canvas>

        </Main>
    );
}

export default ChartDasboard;
