import { URLSearchParamsInit } from 'react-router-dom';
import { Codec } from './getCodec';

export type { URLSearchParamsInit };
export declare const toStringEncoded: (params: URLSearchParamsInit, codec: Codec) => string;
