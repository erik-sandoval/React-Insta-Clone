import React from 'react'

const Username = props => {
    return (
        <div>
            <img src={props.profile.thumbnailUrl} />
            {props.profile.username}
        </div>
    )
}

export default Username

