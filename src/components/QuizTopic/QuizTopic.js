import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopic.css';

const QuizTopic = ({ quizTopic }) => {
    const { name, logo, total, id } = quizTopic;
    return (
        <div className='border-2 drop-shadow rounded-xl bg-slate-200'>
            <div>
                <img className='quiz-img' src={logo} alt="" />
            </div>
            <div className='flex justify-around items-center bg-slate-50 py-3'>
                <div className='text-start'>
                    <p className='font-bold text-cyan-800 text-lg'>{name}</p>
                    <p className='text-cyan-700'>Total Questions: {total}</p>
                </div>
                <div>
                    <Link to={`/${id}`}><button className='bg-cyan-600 px-4 py-2 rounded text-white text-lg'>Start Quiz</button></Link>

                </div>
            </div>
        </div>
    );
};

export default QuizTopic;