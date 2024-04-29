import React, { useContext } from "react";
import { AppContext } from "../provider/index.jsx";
import { FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const { search, setSearch } = useContext(AppContext);

  return (
    <div className="relative ">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>

      <input
        type="text"
        id="Search"
        placeholder="查詢股票或代碼"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-md h-8 border border-gray-300 py-2 pl-2 pe-10 shadow-sm sm:text-sm"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>
          {search ? <FaXmark onClick={() => setSearch("")} /> : <FaSearch />}
        </button>
      </span>
    </div>
  );
}
