import { useState } from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

export const ListItemDropDown = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isResumeLinkDisabled, setIsResumeLinkDisabled] = useState(false);
    const resumeDownload = 'http://localhost:3000/resume-it.pdf';

    const toggleContent = (state) => {
        setIsClicked(state);
    };

    const handleResumeClick = (e) => {
        e.preventDefault();
        setIsClicked(true);
        setIsResumeLinkDisabled(true);
    };

    return (
        <li
            className={styles.listItem}
            onMouseEnter={() => toggleContent(true)}
            onMouseLeave={() => toggleContent(false)}>
            <a
                className={styles.link}
                href=""
                onClick={handleResumeClick}
                disabled={isResumeLinkDisabled}>
                Resume
            </a>
            {isClicked && (
                <div className={styles.dropdownContent}>
                    <Link to={'/resume'}>
                        <button className={styles.button}>Show</button>
                    </Link>
                    <a className={styles.dwLink} href={resumeDownload} download>
                        Download
                    </a>
                </div>
            )}
        </li>
    );
};
