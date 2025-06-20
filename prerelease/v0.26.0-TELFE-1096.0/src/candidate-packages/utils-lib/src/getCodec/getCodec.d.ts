import { ENCODE_SEARCH_PARAMS_MODES_Type } from './schemaAndTypes';

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
export declare const base64Codec: Codec;
export declare const uriComponentCodec: Codec;
export declare const getCodec: (mode?: ENCODE_SEARCH_PARAMS_MODES_Type) => Codec;
