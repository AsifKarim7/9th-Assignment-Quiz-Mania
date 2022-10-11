import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { data } = quiz;
    const { questions } = data;
    return (
        <div>
            <h1 className='text-4xl'>Quiz of {data.name}</h1>

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