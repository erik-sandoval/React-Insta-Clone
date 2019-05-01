import React from 'react'



const SearchBar = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                onChange={props.onChange}
                type="text"
                placeholder="&#xf002; Search"
            ></input>
        </form>
    )
}

export default SearchBar