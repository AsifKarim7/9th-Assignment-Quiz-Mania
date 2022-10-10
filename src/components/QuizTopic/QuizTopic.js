import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopic.css';

const QuizTopic = ({ quizTopic }) => {
    const { name, logo, total, id } = quizTopic;
    return (
        <div className='border-2 rounded-xl  bg-slate-400'>
            <div>
                <img className='quiz-img' src={logo} alt="" />
            </div>
            <div className='flex justify-around items-center bg-slate-100'>
                <div className='text-start'>
                    <p>{name}</p>
                    <p>Total Questions: {total}</p>
                </div>
                <div>
                    <Link to={`/${id}`}><button className='bg-blue-500 px-4 py-2 rounded text-white'>Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;