import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} />

                <section className="todo-list">
                    {this.state.todos.map(todo => 
                        <Todo key={todo.id} title={todo.title} completed={todo.completed} />)
                    }
                </section>
            </main>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string,
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));