import React, { useState } from "react";
import TeliAutocomplete, {
  TeliAutocompleteProps,
} from "../TeliAutocomplete/TeliAutocomplete";
import useDebounce from "../../hooks/useDebounce";
import useTypeaheadQuery from "../../hooks/useTypeahead";

export interface TeliTypeaheadProps<
  Value,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
> extends Omit<
    TeliAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
    "options"
  > {
  errorMessage?: string;
  queryParamKey: string;
  url: string;
  onTransform?: (data: any) => any;
}

function TeliTypeahead<
  Value,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false
>({
  errorMessage,
  helperText,
  queryParamKey,
  url,
  noOptionsText,
  onTransform,
  ...otherProps
}: TeliTypeaheadProps<Value, Multiple, DisableClearable, FreeSolo>) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  const {
    isInitialLoading,
    isError,
    data: options,
    ...query
  } = useTypeaheadQuery(url, queryParamKey, debouncedSearchTerm, onTransform);

  const queryError =
    query.error instanceof Error ? query.error.message : undefined;
  const errMsg = errorMessage ?? queryError;

  const handleInputChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setSearchTerm(value);
  };

  return (
    <TeliAutocomplete
      error={isError}
      options={options ?? [] as Value[]}
      noOptionsText={searchTerm === "" ? "Start typing ..." : noOptionsText}
      loading={isInitialLoading}
      inputValue={searchTerm}
      onInputChange={handleInputChange}
      helperText={isError ? errMsg : helperText}
      mode="search"
      {...otherProps}
    />
  );
}

export default TeliTypeahead;
