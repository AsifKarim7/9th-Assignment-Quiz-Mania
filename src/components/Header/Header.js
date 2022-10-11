import React from 'react';

const Header = () => {

    return (
        <div className='md:flex justify-center items-center my-10 gap-24'>
            <div>
                <h1 className='text-5xl font-bold text-yellow-600'>GREAT THINGS NEVER <br /> COME FROM <br /> COMFORT ZONE</h1>
                <p className='md:mt-14 my-6 font-semibold md:text-xl'>Seek discomfrort. Face the harder challenge everyday.<br />So, try our quiz & enhance your knowledge skills.</p>
            </div>

            <div className='flex justify-center'>
                <img className='md:w-full w-11/12' src='https://i.ibb.co/kVZRVgP/Quiz-Mania.jpg' alt='quiz-mania'></img>
            </div>
        </div>
    );
};

export default Header;