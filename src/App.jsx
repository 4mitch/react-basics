import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', { className: 'subtitle' }, 'Это мое первое приложение на React');
const container = React.createElement('div', null, title, subtitle);
const app = (
    <div>
        <h1>React Todo</h1>
        <p className="subtitle">Это мое первое приложение на React</p>
    </div>
);

console.log(title);
console.log(subtitle);
console.log(container);

const dom = ReactDOM.render(app, document.getElementById('root'));
console.log(dom);