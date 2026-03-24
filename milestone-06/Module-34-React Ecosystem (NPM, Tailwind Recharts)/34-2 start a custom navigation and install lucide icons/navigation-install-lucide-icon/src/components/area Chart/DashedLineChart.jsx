import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const dashedLineData = [
  { stage: "Stage 1", value: 3200 , value2: 3000},
  { stage: "Stage 2", value: 6400, value2: 8000},
  { stage: "Stage 3", value: 9600, value2: 13000},
  { stage: "Stage 4", value: 1200, value2: 15000 },
  { stage: "Stage 5", value: 16000, value2: 3000 },
  { stage: "Stage 6", value: 1600, value2: 0},
  { stage: "Stage 7", value: 16000, value2: 3000}
];

const DashedLineChart = () => {
    return (
        <div className='mx-20'>
            <LineChart width={600} height={300} data={dashedLineData}>
                <CartesianGrid strokeDasharray={"3.3"} stroke='red'></CartesianGrid>
                <XAxis dataKey={"stage"}></XAxis>
                <YAxis></YAxis>
                <Line type={"monotone"} dataKey={"value"}></Line>
                <Line type={"monotone"} dataKey={"value2"} stroke='violet'></Line>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default DashedLineChart;