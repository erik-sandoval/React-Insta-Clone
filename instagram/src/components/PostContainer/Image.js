import React from 'react'

const Image = props => {
    return (
        <>
            <img src={props.profile.imageUrl} alt="instagram post"/>
        </>
    )
}

export default Image
