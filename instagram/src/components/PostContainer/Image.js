import React from "react";
import styled from "styled-components";

const ImageImg = styled.img`
  margin-bottom: 0;
`;

const Image = props => {
  return (
    <>
      <ImageImg src={props.profile.imageUrl} alt='instagram post' />
    </>
  );
};

export default Image;
