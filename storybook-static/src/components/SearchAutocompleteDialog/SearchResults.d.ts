import { default as React } from 'react';

type SearchResultsProps = Partial<{
    totalResults: number;
    nothingFoundText: string;
    children: React.ReactNode;
}>;
declare const SearchResults: React.FC<SearchResultsProps>;
export default SearchResults;
