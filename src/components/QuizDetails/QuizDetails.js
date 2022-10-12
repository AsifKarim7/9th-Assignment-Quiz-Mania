import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { data } = quiz;
    const { questions } = data;
    return (
        <div className='md:mx-44 md:my-16 my-8 rounded-xl'>
            <h1 className='text-4xl font-semibold py-5 text-cyan-700 text-center'>Quiz of {data.name}</h1>

            <div>
                <div>
                    {
                        questions.map(quizQuestion => <Question
                            key={quizQuestion.id}
                            quizQuestion={quizQuestion}
                        ></Question>)
                    }
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;