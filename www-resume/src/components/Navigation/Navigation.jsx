import { Link } from 'react-router-dom';

import { ListItem } from './ListItem';
import { ListItemDropDown } from './ListItemDropDown';

import styles from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <Link to={'/'}>
                    <div>
                        <ListItem component="home">Home</ListItem>
                    </div>
                </Link>

                <div className={styles.list}>
                    <Link to={'/projects'}>
                        <ListItem>Projects</ListItem>
                    </Link>

                    <Link to={'/certificates'}>
                        <ListItem>Certificates</ListItem>
                    </Link>

                    <Link to={'/resume'}>
                        <ListItem>Resume</ListItem>
                    </Link>

                    <Link to={'/contact'}>
                        <ListItem>Contact</ListItem>
                    </Link>
                </div>
            </ul>
        </nav>
    );
};
