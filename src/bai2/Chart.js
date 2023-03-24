import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  const data = [
    {
      x: new Date(2022, 2, 1),
      y: [100, 110, 80, 90],
    },
    {
      x: new Date(2022, 2, 2),
      y: [90, 105, 75, 100],
    },
    {
      x: new Date(2022, 2, 3),
      y: [100, 120, 70, 95],
    },
    {
      x: new Date(2022, 2, 4),
      y: [95, 130, 90, 120],
    },
    {
      x: new Date(2022, 2, 5),
      y: [120, 140, 100, 130],
    },
    {
      x: new Date(2022, 2, 6),
      y: [130, 145, 80, 90],
    },
    {
      x: new Date(2022, 2, 7),
      y: [90, 125, 70, 100],
    },
    {
      x: new Date(2022, 2, 8),
      y: [100, 150, 90, 120],
    },
    {
      x: new Date(2022, 2, 9),
      y: [120, 160, 100, 130],
    },
    {
      x: new Date(2022, 2, 10),
      y: [130, 165, 80, 90],
    },
  ];
  const options = {
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3C90EB",
          downward: "#DF7D46",
        },
      },
    },
    chart: {
      type: "candlestick",
      height: 400,
    },
    series: [
      {
        data: data,
      },
    ],
  };

  // const series = [
  //   {
  //     name: "series-1",
  //     data: [

  //     ],
  //   },
  // ];

  return (
    <div className="mixed-chart">
      <Chart
        options={options}
        series={options.series}
        type={options.chart.type}
        height={options.chart.height}
      />
    </div>
  );
};
export default Charts;
