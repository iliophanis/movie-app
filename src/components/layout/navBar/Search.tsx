import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import { useDebounce } from "hooks";

const Search = () => {
 const [filter, setFilter] = useState("");
 useDebounce(filter, 600);

 const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
  e.preventDefault();
  setFilter(e.currentTarget.value);
 };
 return (
  <div>
   <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <BiSearchAlt className="w-5 h-5 text-gray-500" />
   </div>
   <input
    type="text"
    value={filter}
    onChange={handleInputChange}
    className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:shadow focus:outline-none"
    placeholder="Search..."
   />
  </div>
 );
};

export default Search;
