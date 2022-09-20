import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JSelect } from './components';

function App() {
    return (
        <div className="App">
            hello
            <div className="JSelectContainer-1">
                <JSelect values={['value 1', 'value 2', 'value 3']} />
            </div>
        </div>
    );
}

export default App;
