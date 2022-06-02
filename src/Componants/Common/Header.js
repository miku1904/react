import React from 'react'
import Navlogo from '../Header/Navlogo';
import SearchBar from '../Header/SearchBar';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <Navlogo />
                    <SearchBar />            
                </div>
            </div>
            <div className="inner-bg"><span></span></div>
        </header>
    )
}

export default Header;
