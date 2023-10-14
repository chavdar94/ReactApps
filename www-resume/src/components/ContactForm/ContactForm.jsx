import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './ContactForm.module.css';

export const ContactForm = () => {
    const initialUserData = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
    };
    const [userData, setUserData] = useState(initialUserData);

    const handleChange = (e, field) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                [field]: e.target.value,
            };
        });
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        const id = uuidv4();
        const data = { ...userData, id };
        console.log(data);

        setUserData(initialUserData);
    };

    return (
        <form action="" onSubmit={submitFormHandler}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={userData.firstName}
                    onChange={(e) => handleChange(e, 'firstName')}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={userData.lastName}
                    onChange={(e) => handleChange(e, 'lastName')}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={(e) => handleChange(e, 'email')}
                />
            </div>
            <div>
                <label htmlFor="subject">Subject</label>
                <textarea
                    id="subject"
                    rows={10}
                    cols={30}
                    value={userData.subject}
                    onChange={(e) => handleChange(e, 'subject')}
                />
            </div>
            <input type="submit" value="Send" />
        </form>
    );
};
