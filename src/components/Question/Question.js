import React from 'react';
import Option from '../Option/Option';

const Question = ({ quizQuestion }) => {
    const { options, question, correctAnswer } = quizQuestion;
    console.log(quizQuestion)

    const handleRadioButton = (value) => {
        if (value === correctAnswer) {
            alert('congo')
        }
        else {
            alert('wrong answer')
        }
    }

    return (
        <div>
            <div className='border-2'>
                <div className='py-6'>
                    <h1>Question: {question}</h1>
                </div>

                <div>
                    {
                        options.map((option, idx) => <Option
                            key={idx}
                            option={option}
                            handleRadioButton={handleRadioButton}
                        ></Option>)
                    }
                </div>

            </div>
        </div >
    );
};

export default Question;