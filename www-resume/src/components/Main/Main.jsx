import styles from './main.module.css';
import { Resume } from '../Resume/Resume';
import { Projects } from '../Projects/Projects';
import { ContactForm } from '../ContactForm/ContactForm';

export const Main = ({ selectedComponent }) => {
    return (
        <main className={styles.main}>
            {selectedComponent === 'resume' ? (
                <Resume />
            ) : selectedComponent === 'projects' ? (
                <Projects />
            ) : selectedComponent === 'contact' ? (
                <ContactForm />
            ) : (
                <h1 className={styles.title}>Hello to my blog!</h1>
            )}
        </main>
    );
};
