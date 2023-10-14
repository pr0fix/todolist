import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from './Home';
import Todolist from './Todolist';
import React, { useState } from 'react';

export default function TabApp() {
    
    // Sets default tab which is showed when app is opened
    const [value, setValue] = useState('home');

    // Handles change of tabs on page
    const handleChange = (_, value) => {
        setValue(value);
        };

    // Returns Tab component to be showed on page
    return (
        <>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="home" label="Home" />
                <Tab value="todolist" label="Todos" />
            </Tabs>

            {value === 'home' && <Home/>}
            {value === 'todolist' && <Todolist/>}
        </>


    );

}