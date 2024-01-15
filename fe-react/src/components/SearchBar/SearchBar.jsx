import React, { useRef } from "react";
import { Button, Input } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/search.js";
import "@ui5/webcomponents-icons/dist/reset.js";
import "./SearchBar.scss";

const SearchBar = ({ query, setQuery, onSearch }) => {
  const inputRef = useRef(null);

  const eraseContent = () => {
    setQuery("");
    inputRef.current.focus();
  };
  return (
    <div>
      <Input
        ref={inputRef}
        className="searchInput"
        value={query}
        onChange={(e) => {
          if (e.target.value) {
            setQuery(() => e.target.value);
          }
        }}
        onInput={function _a() {}}
        onSuggestionItemPreview={function _a() {}}
        onSuggestionItemSelect={function _a() {}}
      />
      <Button className="searchButton" onClick={onSearch}>
        <ui5-icon name="search"></ui5-icon>
      </Button>
      <Button className="resetButton" onClick={eraseContent}>
        <ui5-icon name="reset"></ui5-icon>
      </Button>
    </div>
  );
};

export default SearchBar;
