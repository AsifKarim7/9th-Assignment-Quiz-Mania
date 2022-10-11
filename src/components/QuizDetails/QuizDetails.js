import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { data } = quiz;
    const { questions } = data;
    return (
        <div className=' bg-blue-200 md:mx-44 md:my-20 my-14'>
            <h1 className='text-4xl font-semibold py-3 text-neutral-800 text-center'>Quiz of {data.name}</h1>

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