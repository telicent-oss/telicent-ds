/**
 * Copyright (c) 2011, Sun Ning.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
declare const geohash: {
    ENCODE_AUTO: string;
    encode: (latitude: any, longitude: any, numberOfChars: any) => string;
    encode_uint64: (latitude: any, longitude: any, bitDepth: any) => number;
    encode_int: (latitude: any, longitude: any, bitDepth: any) => number;
    decode: (hashString: string) => {
        latitude: number;
        longitude: number;
        error: {
            latitude: number;
            longitude: number;
        };
    };
    decode_int: (hash_int: number, bitDepth: number) => {
        latitude: number;
        longitude: number;
        error: {
            latitude: number;
            longitude: number;
        };
    };
    decode_uint64: (hash_int: number, bitDepth: number) => {
        latitude: number;
        longitude: number;
        error: {
            latitude: number;
            longitude: number;
        };
    };
    decode_bbox: (hash_string: string) => number[];
    decode_bbox_uint64: (hashInt: any, bitDepth: any) => number[];
    decode_bbox_int: (hashInt: any, bitDepth: any) => number[];
    neighbor: (hashString: string, direction: any[]) => string;
    neighbor_int: (hash_int: any, direction: any, bitDepth: any) => number;
    neighbors: (hash_string: string) => string[];
    neighbors_int: (hash_int: any, bitDepth: any) => number[];
    bboxes: (minLat: any, minLon: any, maxLat: any, maxLon: any, numberOfChars: any) => string[];
    bboxes_int: (minLat: any, minLon: any, maxLat: any, maxLon: any, bitDepth: any) => number[];
};
export default geohash;
