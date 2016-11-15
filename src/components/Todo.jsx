import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

function Todo(props) {
    return (
        <div className={`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox checked={props.completed} onChange={() => props.onStatusChange(props.id)} />

            <span className="todo-title">{props.title}</span>

            <Button className="delete icon" icon="delete" onClick={() => props.onDelete(props.id)} />
        </div>
    );
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
};

export default Todo;