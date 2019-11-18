import React from "react";
import styled from "styled-components";

const UserNameDiv = styled.div`
  margin-top: 0.75%;
  display: flex;
  align-items: center;
  font-weight: 700;
  border: 1px solid lightgray;
`;

const UserNameImg = styled.img`
  margin-left: 1%;
  border-radius: 50%;
  width: 50px;
`;

const UserNamePara = styled.p`
  margin-left: 1%;
`;

const Username = props => {
  return (
    <UserNameDiv>
      <UserNameImg src={props.profile.thumbnailUrl} alt='instagram user' />
      <UserNamePara>{props.profile.username}</UserNamePara>
    </UserNameDiv>
  );
};

export default Username;
