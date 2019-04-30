import React from 'react'

import Likes from './Likes'
import Comments from './Comments'


const CommentSection = (props) => {
    return (
        <div className="comments">
            <Likes post={props.profile} />
            {props.profile.comments.map(comment => (
                <div key={comment.text}>
                    <Comments post={comment} />
                </div>
            ))}

            <div class="add-comment">
                <input placeholder="add a comment..."></input>
                <i class="fas fa-ellipsis-h"></i>
            </div>

        </div>
    )
}

export default CommentSection