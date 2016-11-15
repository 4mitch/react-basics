import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

function Todo(props) {
    return (
        <div className={`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox initiallyChecked={props.completed} />

            <span className="todo-title">{props.title}</span>

            <Button className="delete icon" icon="delete" />
        </div>
    );
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
};

export default Todo;