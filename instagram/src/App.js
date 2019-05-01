import React from 'react';
import './App.scss';
import MainBar from './components/SearchBar/MainBar';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';


class App extends React.Component {

  state = {
    data: [],
    search: []
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  searchFilter = event => {
    console.log(event.target.value)
    this.setState({
      search: this.state.data.filter(post => post.username === event.target.value)
    })
  }


  filterSubmit = event => {
    event.preventDefault()
    this.setState({
      data: this.state.search,
      search: []
    })
  }



  render() {
    console.log(this.state.data.search);
    return (
      <div className="App">
        <MainBar
          props={this.state.data}
          onChange={this.searchFilter}
          onSubmit={this.filterSubmit} />

        <Post data={this.state.data} />

      </div>

    )
  }
}







export default App;
