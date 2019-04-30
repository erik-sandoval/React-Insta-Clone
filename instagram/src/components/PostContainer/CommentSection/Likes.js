import React from 'react'

const Likes = (props) => {
    return (
        <div className="likes">
            <div>
                <i class="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
            <p>{props.post.likes} likes</p>
        </div>
    )
}

export default Likes