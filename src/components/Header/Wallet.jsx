import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Wallet = () => {
    return (
        <div className='wallet'>
            <FontAwesomeIcon icon={faWallet} />
        </div>
    )
}

export default Wallet;