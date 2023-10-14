import React, { useEffect, useState } from 'react';
import styles from './ProjectItem.module.css';

import { ProjectItem } from './ProjectItem';

export const Projects = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function fetchRepositories() {
            try {
                const username = 'chavdar94';
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data = await response.json();
                console.log(data);
                setRepositories(data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        }

        fetchRepositories();
    }, []);

    return (
        <div className={styles.gridWrapper}>
            <h2 className={styles.title}>My repositories</h2>
            <ul className={styles.list}>
                {repositories.map((repo) => (
                    <ProjectItem key={repo.id} repo={repo} />
                ))}
            </ul>
        </div>
    );
};
