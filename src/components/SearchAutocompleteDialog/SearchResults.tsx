import React from "react";

type SearchResultsProps = Partial<{
  totalResults: number;
  nothingFoundText: string;
  children: React.ReactNode;
}>;

const SearchResults: React.FC<SearchResultsProps> = ({
  totalResults,
  nothingFoundText = "Nothing found",
  children = null,
}) => {
  if (!children) {
    return (
      <div>
        <p className="grid place-content-center mt-28 text-whiteSmoke-300">
          {nothingFoundText}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="uppercase text-sm">{totalResults} search results</h2>
      {children}
    </div>
  );
};

export default SearchResults;
