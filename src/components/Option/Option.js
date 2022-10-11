import React from 'react';

const Option = ({ option, handleRadioButton }) => {
    return (
        <div>
            <label>
                <input type="radio" name="options" onClick={() => handleRadioButton(option)} />
                {option}
            </label>
        </div>
    );
};

export default Option;