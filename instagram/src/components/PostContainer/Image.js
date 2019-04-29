import React from 'react'

const Image = props => {
    return (
        <div>
            <img src={props.profile.imageUrl} />
        </div>
    )
}

export default Image
