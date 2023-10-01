import React from 'react';
import styles from './ErrorModal.module.css';
import { Button } from '../Button/Button';

export const ErrorModal = ({ message, onConfirm }) => {
    return (
        <div className={styles['modal-overlay']} onClick={onConfirm}>
            <div
                className={styles['modal-container']}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles['modal-heading']}>
                    <h2>Invalid input</h2>
                </div>
                <div className={styles['modal-content']}>
                    <p className={styles['modal-message']}>{message}</p>
                </div>
                <div className={styles['modal-btn']}>
                    <Button content="Okay" onClick={onConfirm} />
                </div>
            </div>
        </div>
    );
};
