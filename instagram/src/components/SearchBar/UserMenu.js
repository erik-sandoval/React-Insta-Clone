import React from 'react'

const UserMenu = (props) => {
    return (
        <div className="side-menu">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user-circle"></i>
            <button onClick={props.logOut}>Logout</button>
        </div>
    )
}

export default UserMenu