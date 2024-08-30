import { default as React } from 'react';

type RecentSearchProps = Partial<{
    nothingFoundText: string;
    children: React.ReactNode;
}>;
declare const RecentSearches: React.FC<RecentSearchProps>;
export default RecentSearches;
