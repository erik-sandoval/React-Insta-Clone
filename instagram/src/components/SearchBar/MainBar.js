import React from 'react'
import SearchBar from './SearchBar';
import Logo from './Logo';
import UserMenu from './UserMenu';
import './SearchBar.scss'

class MainBar extends React.Component {

    render() {
        
        return (
            <div className="search-bar">
                <Logo />
                <SearchBar
                    users={this.props.users}
                    onChange={this.props.onChange}
                    onSubmit={this.props.onSubmit}
                />
                <UserMenu />
            </div>
        )
    }
}

export default MainBar

