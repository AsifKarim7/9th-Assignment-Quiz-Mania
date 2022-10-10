import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data)
    return (
        <div>
            <h2>My Quiz Details</h2>
        </div>
    );
};

export default QuizDetails;