import React from 'react';
import './App.css';
import MainBar from './components/SearchBar/MainBar';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post'

console.log(dummyData)




function App() {
  return (
    <div className="App">
      <MainBar />
      <Post profiles={dummyData}/>
    </div>
  );
}

export default App;
