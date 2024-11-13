import React from 'react';


const SearchBar = ({ onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;