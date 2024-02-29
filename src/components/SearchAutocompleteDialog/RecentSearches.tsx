import React from "react";

type RecentSearchesWrapperProps = {
  children: React.ReactNode;
};
const RecentSearchesWrapper: React.FC<RecentSearchesWrapperProps> = ({
  children,
}) => (
  <div>
    <h2 className="uppercase text-sm">recent searches</h2>
    {children}
  </div>
);

type RecentSearchProps = Partial<{
  nothingFoundText: string;
  children: React.ReactNode;
}>;

const RecentSearches: React.FC<RecentSearchProps> = ({
  nothingFoundText = "Nothing found",
  children = null,
}) => {
  if (!children) {
    return (
      <RecentSearchesWrapper>
        <p className="grid place-content-center mt-24 text-whiteSmoke-300">
          {nothingFoundText}
        </p>
      </RecentSearchesWrapper>
    );
  }

  return <RecentSearchesWrapper>{children}</RecentSearchesWrapper>;
};

export default RecentSearches;
