import React from 'react';

const QuizTopic = ({ quizTopic }) => {
    const { name, logo, total } = quizTopic;
    return (
        <div>
            <img src={logo} alt="" />
            <p>{name}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default QuizTopic;