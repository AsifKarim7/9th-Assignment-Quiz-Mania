import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [chart, setChart] = useState([]);
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
                setChart(quizData);
            });
    }, [])
    return (
        <div>
            <div className='text-3xl text-blue-600 font-bold my-10'>
                <h2>Quiz Chart</h2>
            </div>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    width={700}
                    height={400}
                    data={chart}
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
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;