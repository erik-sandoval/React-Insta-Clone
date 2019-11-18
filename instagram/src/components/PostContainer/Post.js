import React from "react";
import styled from "styled-components";

import Username from "./Username";
import Image from "./Image";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.scss";

const PostDiv = styled.div`
  position: relative;
  top: 50px;
  z-index: 0;
  margin: 0 auto;
  width: 640px;
`;

class Post extends React.Component {
  render() {
    return (
      <PostDiv>
        {this.props.data.map(profile => (
          <div key={profile.timestamp}>
            <Username profile={profile} />
            <Image profile={profile} />
            <CommentSection profile={profile} />
          </div>
        ))}
      </PostDiv>
    );
  }
}

export default Post;
