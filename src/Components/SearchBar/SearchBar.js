import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import "./SearchBar.css";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState(false);
  const TitleArray = useSelector((state) => state.videoReducer)
  ?.data?.filter((q) =>
    q?.videoTitle?.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m?.videoTitle)

  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className="Search_div">
            <input
              type="text"
              className="iBox_SearchBar"
              placeholder="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={() => setSearchList(true)}
            />
            <Link to={`/search/${searchQuery}`}>
              <FaSearch
                className="SearchIcon_SearchBar"
                onClick={() => setSearchList(false)}
              />
            </Link>
            <BsMicFill className="Mic_SearchBar" />
            {searchQuery && searchList && (
              <SearchList
                setSearchList={setSearchList}
                setSearchQuery={setSearchQuery}
                TitleArray={TitleArray}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
