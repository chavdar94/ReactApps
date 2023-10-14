import styles from './ProjectItem.module.css';

export const ProjectItem = (props) => {
    return (
        <li className={styles.listItem} key={props.repo.id}>
            <a
                className={styles.link}
                href={props.repo.html_url}
                target="_blank"
                rel="noopener noreferrer">
                <img
                    src="https://images.pexels.com/photos/4386293/pexels-photo-4386293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className={styles.repoImg}
                />
                {props.repo.name}
            </a>
        </li>
    );
};
