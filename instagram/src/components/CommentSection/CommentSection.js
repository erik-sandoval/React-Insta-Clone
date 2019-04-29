import React from 'react'


const CommentSection = (props) => {
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

export default CommentSection