import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast, ToastContainer } from 'react-toastify';


const Question = ({ quizQuestion }) => {
    const { options, question, correctAnswer, id } = quizQuestion;

    const handleIcon = (correctAnswer) => {
        toast.success(correctAnswer, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div>
            <div className='border-2  bg-blue-100 m-4'>
                <div className='py-6 flex justify-center'>
                    <h1 className='md:mr-24 mr-0 md:text-2xl sm:text-sm'>{question}</h1>
                    <EyeIcon onClick={() => { handleIcon(correctAnswer) }} className="h-6 w-6 text-blue-500 cursor-pointer"></EyeIcon>
                    <ToastContainer></ToastContainer>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                    {
                        options.map((option, idx) => <Option
                            key={idx}
                            option={option}
                            correctAnswer={correctAnswer}
                            id={id}
                        ></Option>)
                    }
                </div>

            </div>
        </div >
    );
};

export default Question;