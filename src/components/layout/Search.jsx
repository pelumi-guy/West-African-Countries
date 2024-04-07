import React, { useState, useContext } from 'react';
import SearchContext from '../../contexts/SearchContext';




const Search = () => {
    const { keyword, setKeyword } = useContext(SearchContext);

    const [searchKeyword, setSearchKeyword] = useState("");

    const searchHandler = () => {
       setKeyword(searchKeyword);
    };

    return (
        <form
            onSubmit={searchHandler}
        >
            <div className="input-group search-container">
                {/* <div className="input-group-append py-0">
                    <button id="search_btn" className="btn search-btn border" style={{ borderRight: "0px" }}>
                        <img src={SearchIcon} alt="search" />
                    </button>
                </div> */}
                <input
                    type="text"
                    id="search_field"
                    className="form-control search-box"
                    placeholder="Enter Country Name ..."
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />

            </div>
        </form>
    )
}

export default Search