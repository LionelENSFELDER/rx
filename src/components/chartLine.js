import React from 'react';
import { Line } from 'react-chartjs-2';

export default function ChartLine(){
  const data = {
    labels: ['1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000'],
    datasets: [
      {
        label: 'Origine',
        data: [0, 2, 3, 5, 6, 10, 5, 3],
        fill: false,
        backgroundColor: '#AABBBB',
        borderColor: '#AABBBB',
      },
      {
        label: 'Stage 1+',
        data: [0, 3, 4, 6, 7, 10, 6, 4],
        fill: false,
        backgroundColor: '#0C8C40',
        borderColor: '#0C8C40',
      },
      {
        label: 'Stage 2+',
        data: [0, 4, 5, 7, 9, 10, 6, 5],
        fill: false,
        backgroundColor: '#FF8A00',
        borderColor: '#FF8A00',
      },
      {
        label: 'Stage 3, 3+',
        data: [0, 5, 6, 9, 10, 11, 9, 8],
        fill: false,
        backgroundColor: '#FF3434',
        borderColor: '#FF3434',
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