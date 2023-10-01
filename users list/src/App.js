import { useState } from 'react';
import { AddUser } from './components/AddUser/AddUser';
import { UserList } from './components/UserList/UserList';

function App() {
    const [inputData, setInputData] = useState([]);

    const setUserData = (userData) => {
        setInputData((oldState) => [...oldState, userData]);
    };

    return (
        <div>
            <AddUser onSubmitData={setUserData} />
            {inputData.length === 0 ? '' : <UserList inputData={inputData} />}
        </div>
    );
}

export default App;
