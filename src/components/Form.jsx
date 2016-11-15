import React from 'react';

import Button from './Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;

        if (title) {
            this.props.onAdd(title);
            this.refs.title.value = '';
        }
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="Что нужно сделать?" />

                <Button type="submit">Добавить</Button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: React.PropTypes.func.isRequired
};

export default Form;