import styles from './UserList.module.css';

export const ListRow = ({ username, age }) => {
    return (
        <li
            className={
                styles['user-row']
            }>{`${username} (${age} years old)`}</li>
    );
};
