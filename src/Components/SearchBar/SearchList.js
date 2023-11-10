import React from "react";
import "./SearchList.css";
import { FaSearch } from "react-icons/fa";
const SearchList = ({ TitleArray, setSearchQuery, setSearchList }) => {
  return (
    <div className="Container_SearchList">
      {TitleArray.map((m) => {
        return (
          <p
            key={m}
            className="titleItem"
            onClick={() => {
              setSearchQuery(m);
            //   setSearchList(false);
            }}
          >
            <FaSearch />
            {m}
          </p>
        );
      })}
    </div>
  );
};

export default SearchList;
