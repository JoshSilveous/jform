import React from 'react';
import './App.css';
import { JSelect } from './components';

function App() {
    return (
        <div className="App">
            <div className="App_Line">
                <JSelect
                    className="JSelectContainer-1"
                    options={['Regular', 'value 1', 'value 2', 'value 3', 'value 4', 'value 5']}
                />
                <JSelect
                    className="JSelectContainer-1"
                    options={['Extra Long', 'value 1', 'value 2', 'value 3', 'value 4', 'value 5', 'value 6', 'value 7', 'value 8', 'value 9', 'value 10',
                        'value 11', 'value 12', 'value 13', 'value 14', 'value 15', 'value 16', 'value 17', 'value 18', 'value 19', 'value 20', 'value 1', 'value 2', 'value 3', 'value 4', 'value 5', 'value 6', 'value 7', 'value 8', 'value 9', 'value 10',
                        'value 11', 'value 12', 'value 13', 'value 14', 'value 15', 'value 16', 'value 17', 'value 18', 'value 19', 'value 20']}
                />
                <JSelect
                    className="JSelectContainer-1"
                    options={['Long Text Long Text Long Text', 'This is another long piece of text', 'value 2', 'value 3', 'more long text baby long long long', 'value 5']}
                />
            </div>
            <div className="App_Line">
                <JSelect
                    className="JSelectContainer-1"
                    options={['Regular', 'value 1', 'value 2', 'value 3', 'value 4', 'value 5']}
                />
                <JSelect
                    className="JSelectContainer-1"
                    options={['Extra Long', 'value 1', 'value 2', 'value 3', 'value 4', 'value 5', 'value 6', 'value 7', 'value 8', 'value 9', 'value 10',
                        'value 11', 'value 12', 'value 13', 'value 14', 'value 15', 'value 16', 'value 17', 'value 18', 'value 19', 'value 20', 'value 1', 'value 2', 'value 3', 'value 4', 'value 5', 'value 6', 'value 7', 'value 8', 'value 9', 'value 10',
                        'value 11', 'value 12', 'value 13', 'value 14', 'value 15', 'value 16', 'value 17', 'value 18', 'value 19', 'value 20']}
                />
                <JSelect
                    className="JSelectContainer-1"
                    options={['Long Text Long Text Long Text', 'This is another long piece of text', 'value 2', 'value 3', 'more long text baby long long long', 'value 5']}
                />
            </div>
        </div>
    );
}

export default App;
