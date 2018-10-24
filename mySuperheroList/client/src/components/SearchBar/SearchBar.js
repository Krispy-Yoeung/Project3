import React from "react";

const SearchBar = props => (
  <React.Fragment>
    <input
      style={{
        fontSize: 24,
        display: "block",
        width: "100%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }}
      onChange={props.onChange}
      placeholder="Enter search term"
    />
  </React.Fragment>
);

export default SearchBar;
