import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({ option, correctAnswer, id }) => {

    const handleRadioButton = (value) => {
        if (value === correctAnswer) {
            toast.success('Correct Answer!', {
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
        else {
            toast.error('Wrong Answer!', {
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
    }

    return (
        <div className='m-6 border border-gary-600 bg-white py-4'>
            <ToastContainer></ToastContainer>
            <label className='text-neutral-800 sm:text-sm md:text-lg'>
                <input className='cursor-pointer mx-2' type="radio" name={id} onClick={() => handleRadioButton(option)} />
                {option}
            </label>
        </div>
    );
};

export default Option;