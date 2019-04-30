import React from 'react';
import './App.scss';
import MainBar from './components/SearchBar/MainBar';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post'


class App extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  render() {
    
    return (
  
      <div className="App">
        {console.log(this.state.data)}
        <MainBar />
        <Post data={this.state.data} />

      </div>

    )
  }
}







export default App;
