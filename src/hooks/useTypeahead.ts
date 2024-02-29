import { useQuery } from "@tanstack/react-query";
import { fetchOptions } from "./query-utils";

const fetchSearchResults = async (
  url: string,
  queryParamKey: string,
  query: string
) => {
  const queryParams = new URLSearchParams({
    [queryParamKey]: query,
  }).toString();
  const response = await fetch(`${url}/typeahead?${queryParams}`, fetchOptions);

  if (!response.ok) {
    throw new Error(
      `An error occured while retrieving search results for query ${query}`
    );
  }
  return response.json();
};

const useTypeaheadQuery = (
  url: string,
  queryParamKey: string,
  query: string,
  onTransform?: <Data>(data: Data) => any
) => {
  const searchQuery = useQuery(
    ["typeahead"],
    () => fetchSearchResults(url, queryParamKey, query),
    {
      enabled: Boolean(query),
      select: onTransform,
      retry: 1,
    }
  );
  return searchQuery;
};

export default useTypeaheadQuery;
