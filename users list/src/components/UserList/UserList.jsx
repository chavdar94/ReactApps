import styles from './UserList.module.css';
import { ListRow } from './ListRow';

export const UserList = ({ inputData }) => {
    return (
        <div className={styles['users-list']}>
            <ul className={[styles['list-container']]}>
                {inputData.map((user, index) => (
                    <ListRow
                        key={index}
                        username={user.username}
                        age={user.age}
                    />
                ))}
            </ul>
        </div>
    );
};
