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
            <div className='quizTopics-container'>
                {
                    quizTopics.data.map(quizTopic => <QuizTopic
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;