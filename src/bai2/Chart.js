import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {
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
      id: "candlestick-chart",
    },
  };

  const series = [
    {
      name: "series-1",
      data: [
        { x: new Date("2022-01-01"), y: [10, 15, 5, 15] },
        { x: new Date("2022-01-02"), y: [15, 20, 10, 20] },
        { x: new Date("2022-01-03"), y: [20, 25, 15, 25] },
        { x: new Date("2022-01-10"), y: [55, 60, 50, 60] },
        { x: new Date("2022-01-11"), y: [60, 65, 55, 65] },
        { x: new Date("2022-01-12"), y: [65, 70, 20, 70] },
        { x: new Date("2022-01-13"), y: [70, 75, 61, 15] },
        { x: new Date("2022-01-14"), y: [75, 80, 70, 80] },
        { x: new Date("2022-01-04"), y: [25, 30, 20, 30] },
        { x: new Date("2022-01-05"), y: [30, 35, 25, 35] },
        { x: new Date("2022-01-06"), y: [35, 40, 30, 40] },
        { x: new Date("2022-01-07"), y: [40, 45, 35, 45] },
        { x: new Date("2022-01-08"), y: [45, 50, 40, 50] },
        { x: new Date("2022-01-09"), y: [50, 55, 45, 55] },

        { x: new Date("2022-01-15"), y: [80, 85, 75, 85] },
        { x: new Date("2022-01-16"), y: [85, 90, 80, 90] },
        { x: new Date("2022-01-17"), y: [90, 95, 85, 95] },
        { x: new Date("2022-01-21"), y: [110, 115, 105, 115] },
        { x: new Date("2022-01-22"), y: [115, 120, 110, 120] },
        { x: new Date("2022-01-18"), y: [95, 100, 90, 100] },
        { x: new Date("2022-01-19"), y: [100, 105, 95, 105] },
        { x: new Date("2022-01-20"), y: [105, 110, 100, 110] },

        {
          x: new Date("2022-01-20"),
          y: [51.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date("2022-01-21"),
          y: [53.66, 54.99, 51.35, 52.95],
        },

        {
          x: new Date("2022-01-22"),
          y: [52.76, 57.35, 52.15, 57.03],
        },
      ],
    },
  ];

  return (
    <div className="mixed-chart">
      <Chart options={options} series={series} type="candlestick" width={500} />
    </div>
  );
};
export default Charts;
