import React from 'react'

const Username = props => {
    return (
        <div className="user-name">
            <img src={props.profile.thumbnailUrl} alt="instagram user" />
            <p>{props.profile.username}</p>
        </div>
    )
}

export default Username

