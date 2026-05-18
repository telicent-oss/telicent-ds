import { createSearchParams, type URLSearchParamsInit } from "react-router-dom";
import { Codec } from "./getCodec";

export type { URLSearchParamsInit };
export const toStringEncoded = (params: URLSearchParamsInit, codec: Codec) =>
  `${codec.param}=${codec.encode(`${createSearchParams(params)}`)}`;
