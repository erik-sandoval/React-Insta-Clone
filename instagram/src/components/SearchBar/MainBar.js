import React from 'react'
import SearchBar from './SearchBar';
import Logo from './Logo';
import UserMenu from './UserMenu';
import './SearchBar.scss'

class MainBar extends React.Component {

    logOut = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        document.location.reload();
    }

    render() {
        return (
            <div className="search-bar">
                <Logo />
                <SearchBar
                    users={this.props.users}
                    onChange={this.props.onChange}
                />
                <UserMenu logOut={this.logOut}/>
            </div>
        )
    }
}

export default MainBar

