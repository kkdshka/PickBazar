import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./Search.scss";

export const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className="search">
      <IoSearch className="search-icon" />
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search your products from here"
      />
    </div>
  );
};
