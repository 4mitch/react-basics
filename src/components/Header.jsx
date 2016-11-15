import React from 'react';

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default Header;