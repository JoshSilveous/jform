import React from 'react';
import './App.css';
import { JSelect } from './components';

function App() {

    return (
        <div className="App">
            hello
            <JSelect
                className="JSelectContainer-1"
                values={['value 1', 'value 2', 'value 3']}
                defaultValueIndex={2}
                backgroundColor="var(--background)"
                backgroundColorHover="red"
            />
            <JSelect
                className="JSelectContainer-2"
                values={['value 1', 'value 2', 'value 3', 'value 4', 'value 5']}
                defaultValueIndex={2}
                backgroundColor="var(--background-light)"
            />
            <JSelect
                className="JSelectContainer-3"
                values={['value 1', 'value 2', 'value 3', 'value 4, this one is extra long', 'value 5']}
                defaultValueIndex={2}
                backgroundColor="var(--text)"
            />
        </div>
    );
}

export default App;
