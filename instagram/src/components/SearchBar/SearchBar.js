import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
            width        : 100%;
            border-radius: 2px;
`

const SearchForm = styled.form`
        display        : flex;
        justify-content: space-evenly;
        width          : 30%;
`

const SearchBar = (props) => {
    return (
        <SearchForm onSubmit={props.onSubmit}>
            <SearchInput
                onChange={props.onChange}
                type="text"
                placeholder="Search"
            ></SearchInput>
        </SearchForm>
    )
}

export default SearchBar