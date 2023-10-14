import styles from './Navigation.module.css';

export const ListItem = (props) => {
    return (
        <li className={styles.listItem}>
            <a className={styles.link} href="">
                {props.children}
            </a>
        </li>
    );
};
