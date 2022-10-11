import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [bars, setBars] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const totalQuiz = data.data.data;
                const quizData = totalQuiz.map(quiz => {
                    const singleQuiz = {
                        name: quiz.name,
                        total: quiz.total,
                    }
                    return singleQuiz
                })
                console.log(quizData);
                setBars(quizData);
            });
    }, [])
    return (
        <div className='flex justify-center items-center my-20'>
            <div>
                <div className='text-3xl text-blue-600 pb-16'>
                    <h2 className='underline underline-offset-1'>Average Quiz-Info Chart</h2>

                </div>
                <div>
                    <BarChart
                        width={700}
                        height={400}
                        data={bars}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="total" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </div>

            </div>
        </div>

    );
};

export default Statistics;