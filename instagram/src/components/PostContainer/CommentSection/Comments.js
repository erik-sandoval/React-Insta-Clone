import React from 'react'

const Comments = (props) => {
    return (
        <div>
            <p><span className="comment-user">{props.post.username}</span> {props.post.text}</p>
        </div>
    )
}

export default Comments