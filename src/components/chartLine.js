import React from 'react';
import { Line } from 'react-chartjs-2';

export default function ChartLine(){
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Test',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: '#FF3434',
        borderColor: '#FF3434',
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return(
    <Line data={data} options={options} />
  )
}