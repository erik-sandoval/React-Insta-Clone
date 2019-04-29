import React from 'react'
import Username from './Username'
import Image from './Image'


const Post = (props) => {
    return (
        <div>

            {props.profiles.map(profile => (
            <div>
                <Username profile={profile}/>
                <Image profile={profile}/>
            </div>
            ))}
        </div>
    )
}

export default Post