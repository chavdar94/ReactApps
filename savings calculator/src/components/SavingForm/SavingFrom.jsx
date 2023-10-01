import { useState } from 'react';

import { FormField } from './FormField';

export const SavingFrom = ({ onCalculate }) => {
    const initialData = {
        'current-savings': '',
        'yearly-contribution': '',
        'expected-return': '',
        duration: '',
    };
    const [userInput, setUserInput] = useState(initialData);

    const handleChange = (event) => {
        setUserInput((oldState) => ({
            ...oldState,
            [event.target.id]: +event.target.value,
        }));
    };

    const resetButtonHandler = () => {
        setUserInput(initialData);
    };

    const calculateHandler = (event) => {
        event.preventDefault();
        onCalculate(userInput);
    };

    return (
        <form className="form" onSubmit={calculateHandler}>
            <div className="input-group">
                <FormField
                    htmlFor={'current-savings'}
                    textContent="Current Savings ($)"
                    type="number"
                    id="current-savings"
                    value={userInput['current-savings']}
                    onChange={handleChange}
                />

                <FormField
                    htmlFor={'yearly-contribution'}
                    textContent="Yearly Savings ($)"
                    type="number"
                    id="yearly-contribution"
                    value={userInput['yearly-contribution']}
                    onChange={handleChange}
                />
            </div>
            <div className="input-group">
                <FormField
                    htmlFor={'expected-return'}
                    textContent="Expected Interest (%, per year)"
                    type="number"
                    id="expected-return"
                    value={userInput['expected-return']}
                    onChange={handleChange}
                />
                <FormField
                    htmlFor={'duration'}
                    textContent="Investment Duration (years)"
                    type="number"
                    id="duration"
                    value={userInput['duration']}
                    onChange={handleChange}
                />
            </div>
            <p className="actions">
                <button
                    type="reset"
                    className="buttonAlt"
                    onClick={resetButtonHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};
