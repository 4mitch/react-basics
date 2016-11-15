import React from 'react';

const Checkbox = React.createClass({
    propTypes: {
        initiallyChecked: React.PropTypes.bool.isRequired
    },

    getDefaultProps() {
        return {
            initiallyChecked: false
        };
    },

    getInitialState() {
        return {
            checked: this.props.initiallyChecked
        };
    },

    handleClick(event) {
        this.setState({
            checked: !this.state.checked
        });
    },

    render() {
        return (
            <button className="checkbox icon" onClick={this.handleClick}>
                <i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>         
            </button>
        );
    }
});

Checkbox.propTypes = {
    initiallyChecked: React.PropTypes.bool.isRequired
};

export default Checkbox;