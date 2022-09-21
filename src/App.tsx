import React from 'react';
import './App.css';
import { JSelect } from './components';

function App() {
    return (
        <div className="App">
            hello
            <div className="JSelectContainer-1">
                <JSelect
                    values={['value 1', 'value 2', 'value 3']}
                    defaultValueIndex={2}
                />
            </div>
        </div>
    );
}

export default App;
