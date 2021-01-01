import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { DRAW, LOST, PAPER, ROCK, SCISSORS, WON } from '../modules/game-logic';
import { getPercentage } from '../modules/percentage';

const getChartData = (data) => {
  const totalResult = data.won + data.lost + data.draw;
  const totalChoice = data.rock + data.paper + data.scissors;
  return [
    getPercentage(data.won, totalResult),
    getPercentage(data.lost, totalResult),
    getPercentage(data.draw, totalResult),
    getPercentage(data.rock, totalChoice),
    getPercentage(data.paper, totalChoice),
    getPercentage(data.scissors, totalChoice),
  ];
};

const options = {
  scale: {
    pointLabels: {
      fontSize: 16,
    },
    gridLines: {
      circular: true,
    },
    ticks: {
      maxTicksLimit: 5,
      suggestedMin: 0,
    },
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    position: 'bottom',
    labels: {
      usePointStyle: true,
      fontSize: 16,
    },
  },
  tooltips: {
    mode: 'index',
  },
  maintainAspectRatio: false,
};

const RadarChart = () => {
  const name = useSelector((state) => state.name);
  const player = useSelector((state) => state.player);
  const computer = useSelector((state) => state.computer);
  
  const data = {
    labels: [WON, LOST, DRAW, ROCK, PAPER, SCISSORS],
    datasets: [
      {
        label: name,
        data: getChartData(player),
        backgroundColor: '#d35d6e99',
      },
      {
        label: 'Computer',
        data: getChartData(computer),
      },
    ],
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
