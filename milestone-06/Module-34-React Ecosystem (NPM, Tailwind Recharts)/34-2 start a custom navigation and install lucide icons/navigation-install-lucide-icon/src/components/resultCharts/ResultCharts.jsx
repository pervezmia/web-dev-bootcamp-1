import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


    const resultData = [
  { "id": "S001", "name": "Rahim", "physics": 85, "math": 78, "biology": 82 },
  { "id": "S002", "name": "Karim", "physics": 72, "math": 69, "biology": 75 },
  { "id": "S003", "name": "Ayesha", "physics": 90, "math": 88, "biology": 92 },
  { "id": "S004", "name": "Fatima", "physics": 66, "math": 70, "biology": 64 },
  { "id": "S005", "name": "Hasan", "physics": 78, "math": 82, "biology": 80 },
  { "id": "S006", "name": "Nusrat", "physics": 88, "math": 91, "biology": 87 },
  { "id": "S007", "name": "Jamal", "physics": 54, "math": 60, "biology": 58 },
  { "id": "S008", "name": "Sadia", "physics": 91, "math": 89, "biology": 93 },
  { "id": "S009", "name": "Imran", "physics": 73, "math": 76, "biology": 74 },
  { "id": "S010", "name": "Tania", "physics": 80, "math": 84, "biology": 79 }
]

const ResultCharts = () => {
    return (
        <div className='mx-10'>
            <LineChart width={600} height={200} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey="math"></Line>
                <Line dataKey={"biology"} stroke='red'></Line>
                <Line dataKey={"physics"} stroke='#EFBC9B'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;