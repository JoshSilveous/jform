import React from 'react';
import './App.css';
import { JSelect } from './components';

function App() {
    
    return (
        <div className="App">
            hello
            <div className="JSelectContainer-1">
                <JSelect
                    key="1"
                    values={['value 1', 'value 2', 'value 3']}
                    defaultValueIndex={2}
                    backgroundColor="var(--background)"
                    backgroundColorHover="red"
                />
            </div>
            <div className="JSelectContainer-2">
                <JSelect
                    key="2"
                    values={['value 1', 'value 2', 'value 3', 'value 4', 'value 5']}
                    defaultValueIndex={2}
                    backgroundColor="var(--background-light)"
                />
            </div>
            <div className="JSelectContainer-3">
                <JSelect
                    key="3"
                    values={['value 1', 'value 2', 'value 3', 'value 4', 'value 5']}
                    defaultValueIndex={2}
                    backgroundColor="var(--text)"
                />
            </div>
        </div>
    );
}

export default App;
