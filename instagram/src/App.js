import React from 'react';
import './App.scss';
import MainBar from './components/SearchBar/MainBar';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post'

function App() {
  return (
    <div className="App">
      <MainBar />
      <Post data={dummyData} />

    </div>
  );
}

export default App;
