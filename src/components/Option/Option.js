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
        <div className='m-4 border border-gary-600 bg-slate-50 py-4'>
            <ToastContainer></ToastContainer>
            <label className='text-cyan-900'>
                <input className='cursor-pointer mx-2' type="radio" name={id} onClick={() => handleRadioButton(option)} />
                <small className='md:text-lg'>{option}</small>
            </label>
        </div>
    );
};

export default Option;