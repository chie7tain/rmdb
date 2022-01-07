import React, { useState, useEffect, useRef } from "react";

///image
import searchIcon from "../../images/search-icon.svg";

///styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchIterm }) => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search Movie" />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
