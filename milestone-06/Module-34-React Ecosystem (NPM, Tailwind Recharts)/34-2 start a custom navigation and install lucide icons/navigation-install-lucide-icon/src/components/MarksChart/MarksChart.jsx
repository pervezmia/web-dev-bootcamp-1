import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    // console.log(marksData);

    //data processing for the chart
    const markChartData = marksData.map(studentData =>{
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            math: studentData.math,
            biology: studentData.biology
        }
        const avg = (student.physics + student.biology + student.math) / 3;
        student.avg = avg;
        return student;

    })
    console.log(markChartData);
    return (
        <div>
            <BarChart width={600} height={300} data={markChartData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"physics"} fill='#8884d8'></Bar>
                <Bar dataKey={"math"} fill='red'></Bar>
                <Bar dataKey={"biology"} fill='green'></Bar>
                <Bar dataKey={"avg"} fill='indigo'></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default MarksChart;