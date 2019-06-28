import React from 'react'
import styled from 'styled-components'

const CommentUserSpan = styled.span`
font-weight: 700;
`

const Comments = (props) => {
    return (
        <div>
            <p><CommentUserSpan>{props.post.username}</CommentUserSpan> {props.post.text}</p>
        </div>
    )
}

export default Comments