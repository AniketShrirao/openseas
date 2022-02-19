import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
    return (
        <form>
            <div className="form-group">
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' placeholder='Search' />
                <span>Error Message</span>
            </div>
        </form>
    )
}

export default Searchbar;