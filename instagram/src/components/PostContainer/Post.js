import React from 'react'
import Username from './Username'
import Image from './Image'
import CommentSection from './CommentSection/CommentSection';
import './PostContainer.scss'


class Post extends React.Component {

    render() {
        return (
            <div className="post">
                {this.props.data.map(profile => (
                    <div key={profile.timestamp}>
                        <Username profile={profile} />
                        <Image profile={profile} />
                        <CommentSection profile={profile} />
                    </div>
                ))}
            </div>
        )
    }
}




export default Post