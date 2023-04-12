import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
    {
        name: 'Assignment One',
        marks: 60
    },
    {
        name: 'Assignment Two',
        marks: 60
    },
    {
        name: 'Assignment Three',
        marks: 57
    },
    {
        name: 'Assignment Four',
        marks: 60
    },
    {
        name: 'Assignment Five',
        marks: 60
    },
    {
        name: 'Assignment Six',
        marks: 60
    },
    {
        name: 'Assignment Seven',
        marks: 60
    },
    {
        name: 'Assignment Eight',
        marks: 60
    },
];


const Statistics = () => {
    return (
        <div>
            <h1 className='text-3xl text-center custom-bg p-10'>Assignment Marks</h1>
            <div className='custom-area mt-20 mb-20'>
                <AreaChart width={1000} height={300} data={data}>
                    <XAxis dataKey="name"
                        tick={{ fontSize: 9 }}
                        interval={0} />
                    <YAxis />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip data="name" />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;