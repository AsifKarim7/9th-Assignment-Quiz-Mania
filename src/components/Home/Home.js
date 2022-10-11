import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const quizTopics = useLoaderData();

    return (
        <div className='home-container'>
            <div className='header-container'>
                <Header></Header>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 gap-28 w-1/2 my-14'>
                    {
                        quizTopics.data.map(quizTopic => <QuizTopic
                            key={quizTopic.id}
                            quizTopic={quizTopic}
                        ></QuizTopic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;