import React from 'react';

const Header = () => {

    return (
        <div className='md:flex justify-center items-center my-10 gap-24'>
            <div>
                <h1 className='md:text-5xl text-3xl font-bold text-cyan-700'>GREAT THINGS NEVER <br /> COME FROM <br /> COMFORT ZONE</h1>
                <p className='md:mt-14 my-8 font-semibold md:text-xl text-slate-500'>Seek discomfrort. Face the harder challenge everyday.<br />So, try our quiz & enhance your knowledge skills.</p>
            </div>

            <div className='flex justify-center'>
                <img className='md:w-full w-11/12' src='https://play-lh.googleusercontent.com/qZwaafgL00JziWMFAULFLKddpKXIBFS0MAoL2tgNshyOsdiI-9lEttfvi8C5qfTuSgM' alt='quiz-mania'></img>
            </div>
        </div>
    );
};

export default Header;