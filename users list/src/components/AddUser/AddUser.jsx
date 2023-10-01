import { useState } from 'react';

import styles from './AddUser.module.css';
import { Button } from '../Button/Button';
import { ErrorModal } from '../ErrorModal/ErrorModal';

const initialInput = {
    username: '',
    age: '',
};

export const AddUser = ({ onSubmitData }) => {
    const [userInput, setUserInput] = useState(initialInput);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.username.trim() === '' || userInput.age.trim() === 0) {
            setError('Please enter a valid name and age (non-empty values).');
            return;
        } else if (+userInput.age < 1 || userInput.username.trim() === '') {
            setError('Please enter a valid age (> 0).');
            return;
        }
        onSubmitData(userInput);
        setUserInput(initialInput);
    };

    const userInputHandler = (e) => {
        setUserInput((oldStat) => ({
            ...oldStat,
            [e.target.id]: e.target.value,
        }));
    };

    const closeModal = () => {
        setError(null);
    };

    return (
        <div className={styles['user-container']}>
            {error && <ErrorModal message={error} onConfirm={closeModal} />}
            <form onSubmit={handleSubmit} className={styles.form} action="">
                <div className={styles['fields-container']}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={userInput.username}
                        onChange={userInputHandler}
                    />
                </div>
                <div className={styles['fields-container']}>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        id="age"
                        value={userInput.age}
                        onChange={userInputHandler}
                    />
                </div>
                <Button content="Add User" type="submit" />
            </form>
        </div>
    );
};
