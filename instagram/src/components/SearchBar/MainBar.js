import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import "./SearchBar.scss";
import styled from "styled-components";

const SearchBarDiv = styled.div`
  top: 0;
  background: white;
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

class MainBar extends React.Component {
  logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.location.reload();
  };

  render() {
    return (
      <SearchBarDiv>
        <Logo />
        <SearchBar users={this.props.users} onChange={this.props.onChange} />
        <UserMenu logOut={this.logOut} />
      </SearchBarDiv>
    );
  }
}

export default MainBar;
