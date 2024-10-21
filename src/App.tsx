// src/App.tsx
import React from 'react';
import './App.css';
import Transactions from './components/Transactions';

const App: React.FC = () => {
    return (
        <div className="App">
            <Transactions />
        </div>
    );
};

export default App;
