import React from 'react'

const Search = (props) => {

    return (
        <div>
            <input className="repo-search" placeholder=" Find a repository..." type="text" id="search" name="search"  onChange={props.handleSearch} />
        </div>
    )
}

export default Search

