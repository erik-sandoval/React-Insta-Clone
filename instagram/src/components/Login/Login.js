import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.toggle}>
          Username:{" "}
          <input onChange={this.props.handleChange} name='username'></input>
          Password:{" "}
          <input onChange={this.props.handleChange} name='password'></input>
          <button>Login</button>
        </form>
        <></>
      </div>
    );
  }
}

export default Login;
