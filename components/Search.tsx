import React from "react";
import Image from "next/image";
const Search = () => {
  return (
    <div className=" mx-6  py-3 px-4 w-[231px] flex items-center h-11 border-2 rounded-lg">
      <Image
        src="/search.png"
        width={20}
        height={20}
        alt="search"
        className="mr-2"
      />
      <input
        type="search"
        placeholder="Search"
        className="focus:outline-none w-[100%]"
      />
    </div>
  );
};

export default Search;
