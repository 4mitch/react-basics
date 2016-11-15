import React from 'react';

function Checkbox(props) {
    return (
        <button className="checkbox icon">
            <i className="material-icons">check_box_outline_blank</i>
        </button>
    );
}

Checkbox.propTypes = {
    checked: React.PropTypes.bool.isRequired
};

export default Checkbox;