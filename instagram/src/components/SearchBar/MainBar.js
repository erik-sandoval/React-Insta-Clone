import React from 'react'
import SearchBar from './SearchBar';
import Logo from './Logo';
import UserMenu from './UserMenu';
import './SearchBar.scss'

const MainBar = () => {
    return (
        <div className="search-bar">
            <Logo />
            <SearchBar />
            <UserMenu />
        </div>
    )
}

export default MainBar

