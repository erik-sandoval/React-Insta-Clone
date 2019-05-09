import React from 'react'
import styled from 'styled-components'

const LikesDiv = styled.div`
    font-weight: 700;
    margin-top: 1%;
    margin-left: 0;
`

const LikesIconDiv = styled.div`
    margin-left: -1%;
`

const Likes = (props) => {
    return (
        <LikesDiv>
            <LikesIconDiv>
                <i onClick={props.like} className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </LikesIconDiv>
            <p>{props.post} likes</p>
        </LikesDiv>
    )
}

export default Likes