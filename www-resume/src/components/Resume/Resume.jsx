import styles from './Resume.module.css';
import resume from '../../assets/resume-it.jpg';

export const Resume = () => {
    const resumeDownload = 'http://localhost:3000/resume-it.pdf';

    return (
        <div className={styles.resumeContainer}>
            <img src={resume} alt="Resume" className={styles.resume} />

            <a href={resumeDownload} download className={styles.download}>
                Download
            </a>
        </div>
    );
};
