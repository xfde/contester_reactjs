import React from "react";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";

import data from "./data";

const SimpleRadarChart = () => (
  <ResponsiveContainer width="100%" height={270}>
    <RadarChart  cy="63%" outerRadius={120} data={data}>
      <Radar animationEasing={"ease-in-out"} name="Chart" dataKey="A" stroke="#003366" fill="#2a8fdd" fillOpacity={1}/>
      <PolarGrid />
      <PolarAngleAxis orientation={"center"} tick={{fill: 'white'}} dataKey="subject"/>
    </RadarChart>
  </ResponsiveContainer>
);

export default SimpleRadarChart;
