import React from "react";
import styled from "styled-components";

const SideMenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const UserMenu = props => {
  return (
    <SideMenuDiv>
      <i className='far fa-compass'></i>
      <i className='far fa-heart'></i>
      <i className='far fa-user-circle'></i>
      <button onClick={props.logOut}>Logout</button>
    </SideMenuDiv>
  );
};

export default UserMenu;
