import React from "react";

const withAuthenticate = App => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: true,
        username: "",
        password: ""
      };
    }

    handleChange = event => {
      console.log(event.target.name);
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    toggleLogin = event => {
      event.preventDefault();
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);
      document.location.reload();
    };

    render() {
      if (
        localStorage.getItem("username") &&
        localStorage.getItem("password")
      ) {
        return <App />;
      } else {
        return (
          <LoginPage
            toggle={this.toggleLogin}
            handleChange={this.handleChange}
          />
        );
      }
    }
  };

export default withAuthenticate;
