import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>React Todo</h1>
            <p className="subtitle">Это мое первое приложение на React</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));