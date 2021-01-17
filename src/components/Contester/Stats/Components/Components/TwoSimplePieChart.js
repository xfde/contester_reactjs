import React from "react";
import PropTypes from "prop-types";
import {Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {data02} from "./data";

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TwoSimplePieChart = () => (
  <ResponsiveContainer width="100%" height={270}>
    <PieChart>
      <Pie dataKey="value" data={data02} cx="50%" cy="50%" innerRadius={50} outerRadius={90} fill="#2a8fdd" labelLine={false} label={renderCustomizedLabel}/>
      <Tooltip/>
    </PieChart>
  </ResponsiveContainer>
);

TwoSimplePieChart.propTypes = {
  dataKey: PropTypes.node,
};
export default TwoSimplePieChart
