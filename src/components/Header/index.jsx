import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Searchbar from './Searchbar';
import Wallet from './Wallet';
import Wrapper from '../utility/Wrapper';

const Header = () => {
    return (
        <header>
            <Wrapper >
                <Logo />
                <Searchbar />
                <Wallet />
                <Menu />
            </Wrapper>
        </header>
    )
}

export default Header;