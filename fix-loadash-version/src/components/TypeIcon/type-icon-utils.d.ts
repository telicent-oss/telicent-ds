export type TypeIconSizeProp = "xs" | "sm" | "base" | "lg";
export declare const getSizeProps: (size: TypeIconSizeProp) => {
    width: number;
    height: number;
} | {
    width: number;
    height: number;
    fontSize: number;
};
export declare const getDisabledStyles: (isDisabled: boolean) => {};
