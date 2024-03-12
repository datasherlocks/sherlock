import React, { useEffect, useState } from "react";

interface SearchProps {
  theme: string;
  searchData: { question: string }[];
  onClick: () => void;
  showList: boolean;
}

const Search: React.FC<SearchProps> = ({
  theme,
  searchData,
  onClick,
  showList,
}) => {
  return (
    <div className="flex">
      {showList && (
        <div className="results-list w-full">
          {searchData.map((result, id) => (
            <div className="search-result" onClick={onClick} key={id}>
              {result.question}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
