import { useQuery } from "@tanstack/react-query";
import { fetchOptions } from "./query-utils";
import { ApiTypeAheadResponseSchema } from "../schema/ApiTypeAheadResponseSchema";
import { z, ZodError } from "zod";

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
  const json = response.json();
  try {
    return ApiTypeAheadResponseSchema.parse(json);
  } catch (error) {
    if (error instanceof ZodError) {
      console.warn(error);
    } else {
      console.error(error);
    }
    return json as unknown as z.infer<typeof ApiTypeAheadResponseSchema>; // Graceful degradation
  }
};

const useTypeaheadQuery = (
  url: string,
  queryParamKey: string,
  query: string,
  onTransform?: <Data>(data: Data) => any
) => {
  const searchQuery = useQuery({
    queryKey: ["typeahead"],
    queryFn: () => fetchSearchResults(url, queryParamKey, query),  
    enabled: Boolean(query),
    select: onTransform,
    retry: 1,
  });
  return searchQuery;
};

export default useTypeaheadQuery;
