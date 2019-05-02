import React from 'react'

import Likes from './Likes'
import Comments from './Comments'


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
            <div className="comments">
                <Likes like={this.addLike} post={this.state.likes} />
                {this.state.comments.map(comment => (
                    <div key={comment.text}>
                        <Comments post={comment} />
                    </div>
                ))}

                <div className="add-comment">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChanges}
                            type="text"
                            placeholder="add a comment..."
                        ></input>
                    </form>
                    <i className="fas fa-ellipsis-h"></i>
                </div>

            </div>
        )
    }

}

export default CommentSection