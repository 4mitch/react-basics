import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

function Header(props) {
    return (
        <header>
            <Stats todos={props.todos} />
            <h1>{props.title}</h1>
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default Header;