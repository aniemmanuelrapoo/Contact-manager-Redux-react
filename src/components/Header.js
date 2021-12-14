import React from 'react'
import PropTypes from 'prop-types';

const Header = ({ branding }) => {
    return (
        <div>
            <h1 style={{color: 'red', fontSize: '50px'}}>{branding}</h1>
        </div>
    );
};

Header.defaultProps = {
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header
