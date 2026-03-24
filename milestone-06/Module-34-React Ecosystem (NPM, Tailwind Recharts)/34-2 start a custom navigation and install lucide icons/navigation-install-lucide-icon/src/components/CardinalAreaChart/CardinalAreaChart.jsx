import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
const cardinalAreaData = [
  { stage: "Stage 1", min: 6401, max: 12800 },
  { stage: "Stage 2", min: 3201, max: 6400 },
  { stage: "Stage 3", min: 0, max: 9600 },
  { stage: "Stage 4", min: 12960, max: 3200 },
  { stage: "Stage 5", min: 1801, max: 16000 }
];


const CardinalAreaChart = () => {
    return (
        <div className='mx-30'>
            <AreaChart width={500} height={500} data={cardinalAreaData}>
                <CartesianGrid strokeDasharray={"3 3"} stroke='green'>
                </CartesianGrid>
                <XAxis dataKey="stage"></XAxis>
                <YAxis width={'auto'}></YAxis>
                <Tooltip></Tooltip>
                <Area type={"monotone"} dataKey="max" fill='#8884d8' stroke='#8884d8' fillOpacity={0.3}></Area>
                <Area type={"monotone"} dataKey="min" fill='green' stroke='green' fillOpacity={0.3}></Area>
            </AreaChart>
        </div>
    );
};

export default CardinalAreaChart;