import React from 'react'

import Post from './Post'
import dummyData from './dummy-data'
import MainBar from '../SearchBar/MainBar'

class PostPage extends React.Component {

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

export default PostPage