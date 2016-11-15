import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
    return (
        <main>
            <Header title={props.title} />

            <section className="todo-list">
                {props.todos.map(todo => 
                    <Todo key={todo.id} title={todo.title} completed={todo.completed} />)
                }
            </section>
        </main>
    );
}

App.propTypes = {
    title: React.PropTypes.string,
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

ReactDOM.render(<App todos={todos} />, document.getElementById('root'));