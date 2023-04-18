import React, { useRef } from "react";

const Search = ({ term, setTerm }) => {
  const ref = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    setTerm(ref.current.value);
    ref.current.value = "";
  };

  return (
    <div className="flex justify-center my-6">
      <form
        onSubmit={(e) => handleSearch(e)}
        className="flex items-center border border-gray-400 rounded-lg py-2 px-4"
      >
        <input
          ref={ref}
          className="border-none outline-none w-full"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 ml-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
