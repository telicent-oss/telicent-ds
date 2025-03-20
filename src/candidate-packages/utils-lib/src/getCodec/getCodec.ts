import { ENCODE_SEARCH_PARAMS_MODES_Type } from "./schemaAndTypes";

/**
 * TODO make codec work on URLSearchParams - not just strings
 * WHY
 *  As-is we rely on URLSearchParams constructor to be in
 *  the round-trip of any decoding.
 *  This means the decode fn only partially does the decoding;
 *  it relies on the external use of URLSearchParams.
 *
 * WHEN
 *  A.S.A.P — its a simple refactor - unfortunately I had to
 *  abandon due to ruthless prioritization.
 *
 * HOW
 *  https://telicent.atlassian.net/browse/TELFE-1073
 *
 */
export type Codec = {
  param: string;
  encode: (str: string) => string;
  decode: (str: string) => string;
};

export const base64Codec: Codec = {
  param: "safeB64",
  encode: (str) => btoa(str),
  decode: (str) => atob(str),
};

export const uriComponentCodec: Codec = {
  param: "safe",
  encode: encodeURIComponent,
  /**
   * No-op: In all (current) scenarios, the output of this fn is passed
   * to URLSearchParam.constructor which does the "decoding"
   *
   * WARNING: putting decodeURIComponent here will cause double decoding
   *  which will cause `&` within param values to be treated as a param delimited
   * @param val
   * @returns
   */
  decode: (val) => val,
};

export const getCodec = (mode?: ENCODE_SEARCH_PARAMS_MODES_Type) => {
  switch (mode) {
    case "as base64":
      return base64Codec;
    case "as uri component":
    default:
      return uriComponentCodec;
  }
};
