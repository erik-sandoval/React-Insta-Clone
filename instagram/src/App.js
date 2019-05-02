import React from 'react';
import './App.scss';

import withAuthenticate from './authentication/withAuthenticate'
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login)

function App(props){
  return (
    <div>
      <ComponentFromWithAuthenticate loggedIn={props.toggle}/>
    </div>
  )
}
export default App;
