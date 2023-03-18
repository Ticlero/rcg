import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";
//ChartBar를 렌더링 할 바디 컴포넌트
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
