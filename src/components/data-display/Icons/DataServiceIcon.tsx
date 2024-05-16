import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

/*
 * Needs to be scaled for a 24 x 24 grid
 */

const DataServiceIcon: React.FC<SvgIconProps> = (svgIconProps) => (
  <SvgIcon {...svgIconProps}>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="27" viewBox="0 0 15 27" fill="none">
      <circle
        cx="1.74976"
        cy="22.345"
        r="1.40649"
        transform="rotate(90 1.74976 22.345)"
        fill="currentColor"
      />
      <circle
        cx="13.2517"
        cy="18.658"
        r="1.40649"
        transform="rotate(90 13.2517 18.658)"
        fill="currentColor"
      />
      <circle
        cx="7.80444"
        cy="25.158"
        r="1.40649"
        transform="rotate(90 7.80444 25.158)"
        fill="currentColor"
      />
      <mask id="path-4-inside-1_780_6722" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.98926 3.68708C3.01775 3.50841 3.18208 3.19325 3.76767 2.86471C4.39167 2.51461 5.32116 2.2666 6.40234 2.2666C7.48353 2.2666 8.41301 2.51461 9.03702 2.86471C9.58822 3.17396 9.76619 3.47136 9.80895 3.65422H9.80797V11.1355H11.808V3.7453H11.8203C11.8203 2.53778 10.9587 1.64962 10.0156 1.12048C9.04064 0.573466 7.76113 0.266602 6.40234 0.266602C5.04356 0.266602 3.76405 0.573466 2.78907 1.12048C1.84595 1.64962 0.984375 2.53778 0.984375 3.7453H0.989258V11.1355H2.98926V3.68708ZM3.75132 11.916C4.37769 12.25 5.31192 12.4871 6.39861 12.4871C7.48531 12.4871 8.41954 12.25 9.04591 11.916C9.71526 11.559 9.80797 11.2357 9.80797 11.1355H11.808C11.808 12.334 10.9136 13.1865 9.98709 13.6807C9.01759 14.1977 7.74714 14.4871 6.39861 14.4871C5.05009 14.4871 3.77964 14.1977 2.81014 13.6807C1.88361 13.1865 0.989258 12.334 0.989258 11.1355H2.98926C2.98926 11.2357 3.08197 11.559 3.75132 11.916Z"
        />
      </mask>
      <path
        d="M3.76767 2.86471L2.78907 1.12048L2.78907 1.12048L3.76767 2.86471ZM2.98926 3.68708L1.01422 3.3721L0.989258 3.5286V3.68708H2.98926ZM9.03702 2.86471L8.05842 4.60894L8.05842 4.60894L9.03702 2.86471ZM9.80895 3.65422V5.65422H12.3306L11.7564 3.19881L9.80895 3.65422ZM9.80797 3.65422V1.65422H7.80797V3.65422H9.80797ZM9.80797 11.1355H7.80797V13.1355H9.80797V11.1355ZM11.808 11.1355V13.1355H13.808V11.1355H11.808ZM11.808 3.7453V1.7453H9.80797V3.7453H11.808ZM11.8203 3.7453V5.7453H13.8203V3.7453H11.8203ZM10.0156 1.12048L10.9942 -0.623753L10.9942 -0.623753L10.0156 1.12048ZM2.78907 1.12048L1.81047 -0.623753L2.78907 1.12048ZM0.984375 3.7453H-1.01562V5.7453H0.984375V3.7453ZM0.989258 3.7453H2.98926V1.7453H0.989258V3.7453ZM0.989258 11.1355H-1.01074V13.1355H0.989258V11.1355ZM2.98926 11.1355V13.1355H4.98926V11.1355H2.98926ZM3.75132 11.916L4.69249 10.1513L4.69249 10.1513L3.75132 11.916ZM9.04591 11.916L8.10474 10.1513L8.10474 10.1513L9.04591 11.916ZM9.80797 11.1355V9.13546H7.80797V11.1355H9.80797ZM11.808 11.1355H13.808V9.13546H11.808V11.1355ZM9.98709 13.6807L9.04591 11.916L9.04591 11.916L9.98709 13.6807ZM2.81014 13.6807L3.75132 11.916L3.75132 11.916L2.81014 13.6807ZM0.989258 11.1355V9.13546H-1.01074V11.1355H0.989258ZM2.98926 11.1355H4.98926V9.13546H2.98926V11.1355ZM2.78907 1.12048C1.90355 1.6173 1.17442 2.36756 1.01422 3.3721L4.9643 4.00206C4.86108 4.64927 4.4606 4.76921 4.74627 4.60894L2.78907 1.12048ZM6.40234 0.266602C5.04329 0.266602 3.76386 0.573574 2.78907 1.12048L4.74627 4.60894C5.01949 4.45565 5.59902 4.2666 6.40234 4.2666V0.266602ZM10.0156 1.12048C9.04083 0.573574 7.7614 0.266602 6.40234 0.266602V4.2666C7.20567 4.2666 7.7852 4.45565 8.05842 4.60894L10.0156 1.12048ZM11.7564 3.19881C11.5411 2.27819 10.8538 1.59073 10.0156 1.12048L8.05842 4.60894C8.32267 4.7572 7.99125 4.66452 7.86149 4.10963L11.7564 3.19881ZM9.80895 1.65422H9.80797V5.65422H9.80895V1.65422ZM7.80797 3.65422V11.1355H11.808V3.65422H7.80797ZM9.80797 13.1355H11.808V9.13545H9.80797V13.1355ZM13.808 11.1355V3.7453H9.80797V11.1355H13.808ZM11.8203 1.7453H11.808V5.7453H11.8203V1.7453ZM9.03702 2.86471C9.33286 3.03069 9.55027 3.21864 9.67853 3.38763C9.79333 3.53888 9.82031 3.64791 9.82031 3.7453H13.8203C13.8203 1.48375 12.2142 0.0606988 10.9942 -0.623753L9.03702 2.86471ZM6.40234 2.2666C7.48373 2.2666 8.41316 2.51469 9.03702 2.86471L10.9942 -0.623753C9.66812 -1.36776 8.03854 -1.7334 6.40234 -1.7334V2.2666ZM3.76767 2.86471C4.39153 2.51469 5.32096 2.2666 6.40234 2.2666V-1.7334C4.76615 -1.7334 3.13657 -1.36776 1.81047 -0.623753L3.76767 2.86471ZM2.98438 3.7453C2.98438 3.64791 3.01136 3.53888 3.12616 3.38763C3.25442 3.21864 3.47183 3.03069 3.76767 2.86471L1.81047 -0.623753C0.590519 0.0606987 -1.01562 1.48375 -1.01562 3.7453H2.98438ZM0.989258 1.7453H0.984375V5.7453H0.989258V1.7453ZM-1.01074 3.7453V11.1355H2.98926V3.7453H-1.01074ZM0.989258 13.1355H2.98926V9.13545H0.989258V13.1355ZM4.98926 11.1355V3.68708H0.989258V11.1355H4.98926ZM6.39861 10.4871C5.57397 10.4871 4.97592 10.3024 4.69249 10.1513L2.81014 13.6807C3.77947 14.1977 5.04987 14.4871 6.39861 14.4871V10.4871ZM8.10474 10.1513C7.82131 10.3024 7.22326 10.4871 6.39861 10.4871V14.4871C7.74736 14.4871 9.01776 14.1977 9.98709 13.6807L8.10474 10.1513ZM7.80797 11.1355C7.80797 10.6452 7.99822 10.332 8.09667 10.2049C8.20527 10.0647 8.26004 10.0684 8.10474 10.1513L9.98709 13.6807C10.9516 13.1663 11.808 12.3057 11.808 11.1355H7.80797ZM11.808 9.13546H9.80797V13.1355H11.808V9.13546ZM10.9283 15.4454C12.0997 14.8206 13.808 13.4411 13.808 11.1355H9.80797C9.80797 11.2015 9.79263 11.2859 9.68257 11.4237C9.55677 11.5811 9.33992 11.7592 9.04591 11.916L10.9283 15.4454ZM6.39861 16.4871C8.00879 16.4871 9.61553 16.1455 10.9283 15.4454L9.04591 11.916C8.41966 12.25 7.48548 12.4871 6.39861 12.4871V16.4871ZM1.86896 15.4454C3.1817 16.1455 4.78844 16.4871 6.39861 16.4871V12.4871C5.31175 12.4871 4.37757 12.25 3.75132 11.916L1.86896 15.4454ZM-1.01074 11.1355C-1.01074 13.4411 0.697576 14.8206 1.86896 15.4454L3.75132 11.916C3.45731 11.7592 3.24046 11.5811 3.11466 11.4237C3.0046 11.2859 2.98926 11.2015 2.98926 11.1355H-1.01074ZM2.98926 9.13546H0.989258V13.1355H2.98926V9.13546ZM4.69249 10.1513C4.53719 10.0684 4.59196 10.0647 4.70056 10.2049C4.79901 10.332 4.98926 10.6452 4.98926 11.1355H0.989258C0.989258 12.3057 1.84561 13.1663 2.81014 13.6807L4.69249 10.1513Z"
        fill="currentColor"
        mask="url(#path-4-inside-1_780_6722)"
      />
      <path
        d="M10.335 3.41366C10.335 4.44834 8.57274 5.28711 6.39893 5.28711C4.22511 5.28711 2.46289 4.44834 2.46289 3.41366"
        stroke="currentColor"
      />
      <path
        d="M10.9919 9.76806L13.252 12.0281L13.252 18.0281"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4.40039 12.5454L1.91399 15.3954L1.91399 21.3954"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7.9043 13.0649L7.9043 24.2749" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </SvgIcon>
);

export default DataServiceIcon;
