import React from 'react';
import { Line } from 'react-chartjs-2';

export default function ChartLine(){
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Test',
        data: [1, 3, 7, 1, 2, 9],
        fill: false,
        backgroundColor: '#FF3434',
        borderColor: '#FF3434',
      },
      {
        label: 'Test2',
        data: [1, 3, 5, 8, 9, 10],
        fill: false,
        backgroundColor: '#FFF',
        borderColor: '#FFF',
      }
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