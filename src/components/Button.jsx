import React from 'react';

const Button = props => 
    <button className={props.className}>
        <i className="material-icons">{props.icon}</i>
    </button>
;

Button.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string
};

export default Button;