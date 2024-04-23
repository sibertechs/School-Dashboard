import React from "react";
// import "rsuite/dist/styles/rsuite-default.css";
import { LineChart, Line, YAxis } from "@rsuite/charts";

export default function Graph() {
  // Sample Data
  const sampleData = [
    ["00:00", 10, 20],
    ["01:00", 20, 40],
    ["02:00", 30, 29],
    ["03:00", 23, 10],
    ["04:00", 54, 32],
    ["05:00", 4, 5],
  ];

  return (
    <div
      style={{
        display: "block",
        width: 700,
        paddingLeft: 30,
      }}
    >
      <h4>React-Suite YAxis Component</h4>
      <LineChart name="Multiple Lines" data={sampleData}>
        <YAxis name="1st Y-Axis" minInterval={10} />
        <YAxis name="2nd Y-Axis" minInterval={20} />
        <Line name="Today" yAxisIndex={0} />
        <Line name="Yesterday" yAxisIndex={1} />
      </LineChart>
    </div>
  );
}
