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
        <div>
            <ToastContainer></ToastContainer>
            <label>
                <input className='cursor-pointer' type="radio" name={id} onClick={() => handleRadioButton(option)} />
                {option}
            </label>
        </div>
    );
};

export default Option;