import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <nav>
            <FontAwesomeIcon icon={faBars} />
            <ul>
                <li><a href="#FIXME" title='Home'>Home</a></li>
                <li><a href="#FIXME" title='My Account'>My Account</a></li>
                <li><a href="#FIXME" title='Company'>Company</a></li>
                <li><a href="#FIXME" title='Stats'>Stats</a></li>
                <li><a href="#FIXME" title='Resources'>Resources</a></li>
            </ul>
        </nav>
    )
}

export default Menu;