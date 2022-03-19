import { useState } from "react";

const Search = ({ setToggleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // Collect the text

    // Hit the API

    setSearchText("");
    setToggleSearch(false);
  };

  return (
    <div className="search__area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="search__inner">
              <form onSubmit={handleSearch}>
                <input placeholder="Search here... " type="text" onChange={(e) => setSearchText(e.target.value)} />
                <button type="submit"></button>
              </form>

              <div className="search__close__btn">
                <span className="search__close__btn_icon" onClick={() => setToggleSearch(false)}>
                  <i className="zmdi zmdi-close"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
