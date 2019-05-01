import React from 'react';
import './App.scss';
import MainBar from './components/SearchBar/MainBar';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';


class App extends React.Component {

  state = {
    data: [],
    filteredData: []

  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  searchFilter = event => {
    console.log(event.target.value)

    const filter = this.state.data.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    })
    this.setState({
      filteredData: filter
    })
  }

  render() {

    return (
      <div className="App">
        <MainBar
          props={this.state.data}
          onChange={this.searchFilter}
        />
        <Post data={this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data} />

      </div>

    )
  }
}







export default App;
