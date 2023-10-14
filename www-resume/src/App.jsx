import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main/Main';
import { Projects } from './components/Projects/Projects';
import { Resume } from './components/Resume/Resume';
import { ContactForm } from './components/ContactForm/ContactForm';

function App() {
    return (
        <React.Fragment>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
