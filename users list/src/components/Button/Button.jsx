import styles from './Button.module.css';

export const Button = (props) => {
    return (
        <button
            className={styles.btn}
            type={props.type || 'button'}
            onClick={props.onClick}>
            {props.content}
        </button>
    );
};