import React from 'react'
import styled from 'styled-components'

import Likes from './Likes'
import Comments from './Comments'

const CommentsDiv = styled.div`
    margin-top   : -5px;
    padding-left : 1%;
    border       : 1px solid lightgrey;
    margin-bottom: 1%;
`

const AddCommentDiv = styled.div`
    margin-left    : -1%;
    border-top     : 1px solid lightgrey;
    display        : flex;
    align-items    : center;
    justify-content: space-around;
`

const AddCommentForm = styled.form`
    width: 90%;
`

const AddCommentInput = styled.input`
    border       : none;
    width        : 90%;
    height       : 40px;
    margin-bottom: 1%;
`


class CommentSection extends React.Component {

    constructor() {
        super();
        this.state = {
            likes: '',
            comments: [],
            comment: {
                username: '',
                text: ''
            }
        }
    }

    componentDidMount() {
        this.setState({
            likes: this.props.profile.likes,
            comments: this.props.profile.comments
        })
    }

    handleChanges = (event) => {

        this.setState({
            comment: {
                username: localStorage.getItem('username'),
                text: event.target.value
            },
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments, this.state.comment],
            comment: {
                username: '',
                text: ''
            }
        })
    }

    addLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        return (
            <CommentsDiv>
                <Likes like={this.addLike} post={this.state.likes} />
                {this.state.comments.map(comment => (
                    <div key={comment.text}>
                        <Comments post={comment} />
                    </div>
                ))}

                <AddCommentDiv>
                    <AddCommentForm onSubmit={this.handleSubmit}>
                        <AddCommentInput
                            onChange={this.handleChanges}
                            type="text"
                            placeholder="add a comment..."
                        ></AddCommentInput>
                    </AddCommentForm>
                    <i className="fas fa-ellipsis-h"></i>
                </AddCommentDiv>

            </CommentsDiv>
        )
    }

}

export default CommentSection