import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./chart.css";
function CandlestickChart() {
  const data = [
    { date: new Date("2022-03-01"), open: 50, high: 60, low: 40, close: 55 },
    { date: new Date("2022-03-02"), open: 55, high: 65, low: 50, close: 60 },
    { date: new Date("2022-03-03"), open: 60, high: 70, low: 55, close: 65 },
    { date: new Date("2022-03-04"), open: 65, high: 75, low: 60, close: 70 },
    { date: new Date("2022-03-05"), open: 70, high: 80, low: 65, close: 75 },
    { date: new Date("2022-03-06"), open: 80, high: 90, low: 80, close: 90 },
    { date: new Date("2022-03-07"), open: 80, high: 90, low: 75, close: 85 },
  ];
  const ref = useRef();

  useEffect(() => {
    // Thiết lập kích thước biểu đồ
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Tạo phần tử SVG để vẽ biểu đồ
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    // Thiết lập scale cho trục x và y
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.low), d3.max(data, (d) => d.high)])
      .range([height - margin.bottom, margin.top]);

    // Tạo các phần tử ghi chú cho biểu đồ
    svg
      .append("g")
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${height - margin.bottom})`);

    svg
      .append("g")
      .call(d3.axisLeft(y))
      .attr("transform", `translate(${margin.left}, 0)`);

    // Vẽ các nến
    const candleWidth = (chartWidth / data.length) * 0.7;
    const candleOffset = candleWidth / 2;
    const candles = svg
      .selectAll(".candle")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "candle")
      .attr("x", (d) => x(d.date) - candleOffset)
      .attr("y", (d) => y(Math.max(d.open, d.close)))
      .attr("width", candleWidth)
      .attr("height", (d) => Math.abs(y(d.open) - y(d.close)))
      .attr("fill", (d) => (d.open > d.close ? "red" : "green"));

    // Vẽ các thanh giá cao nhất và thấp nhất
    const highLines = svg
      .selectAll(".high")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "high")
      .attr("x1", (d) => x(d.date))
      .attr("x2", (d) => x(d.date))
      .attr("y1", (d) => y(d.high))
      .attr("y2", (d) => y(Math.max(d.open, d.close)))
      .attr("stroke", (d) => (d.open > d.close ? "red" : "green"))
      .attr("stroke-width", 1);
    const lowLines = svg
      .selectAll(".low")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "low")
      .attr("x1", (d) => x(d.date))
      .attr("x2", (d) => x(d.date))
      .attr("y1", (d) => y(d.low))
      .attr("y2", (d) => y(Math.min(d.open, d.close)))
      .attr("stroke", (d) => (d.open > d.close ? "red" : "green"))
      .attr("stroke-width", 1);
  }, [data]);

  return <svg ref={ref}></svg>;
}

export default CandlestickChart;
