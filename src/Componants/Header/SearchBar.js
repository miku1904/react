import React from 'react'

function SearchBar() {
    return (
        <div className="col-md-4 col-xs-12">
        <div className="search-box">
            <input type="text" className="search-txt-box" placeholder="Search" />
            <button type="submit" className="search-btn"><i className="fa fa-search"></i></button>
        </div>
        </div>

    )
}

export default SearchBar