import React from "react";
import MUISvgIcon, { SvgIconProps as MUISvgIconProps } from "@mui/material/SvgIcon";
import { useTheme } from "@mui/material/styles";
import { FlexBox } from "../../layout";

interface TelicentMarkProps extends MUISvgIconProps {
  transparentBg?: boolean;
}

const TelicentMark: React.FC<TelicentMarkProps> = ({
  width = 26,
  height = 26,
  transparentBg = false,
  color,
  sx,
  ...iconProps
}) => {
  const theme = useTheme();

  return (
    <FlexBox
      sx={{
        width: "fit-content",
        height: "fit-content",
        padding: transparentBg ? 0 : 0.5,
        backgroundColor: transparentBg ? "transparent" : theme.palette.primary.main,
      }}
    >
      <MUISvgIcon
        width={width}
        height={height}
        sx={{
          width,
          height,
          ...sx,
        }}
        {...iconProps}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 51">
          <g fill={color ? "currentColor" : theme.palette.primary.contrastText}>
            <path d="M14.0213 18.9119C11.1503 16.4425 7.52745 15.0966 3.68057 15.0966H0.660156V18.9119H3.68057C6.9466 18.9119 10.0002 20.1865 12.2788 22.4999C14.5541 24.8117 15.807 27.9002 15.807 31.1978V50.7061H19.6224V31.1978C19.6224 26.8928 17.9794 22.8534 14.9972 19.823C14.6835 19.5044 14.3566 19.2007 14.0213 18.9119Z" />
            <path d="M20.2962 15.0966C20.2016 14.997 20.107 14.8991 20.0107 14.8012C18.9021 13.6809 17.6973 12.6902 16.4161 11.8338C12.9277 9.5038 8.86506 8.18277 4.58835 8.01847C4.28631 8.00686 3.98427 8.00022 3.68057 8.00022V8.01847H0.660156V11.8338H4.52529C8.11162 11.9882 11.5137 13.1167 14.4279 15.0966C15.4502 15.7903 16.4111 16.5885 17.299 17.4847C17.7521 17.9427 18.1786 18.419 18.5785 18.9119C21.3799 22.3605 22.9034 26.6572 22.9034 31.1978V50.7061H26.7187V31.1978C26.7187 26.7816 25.5089 22.5563 23.2519 18.9119C22.4105 17.5527 21.4214 16.2749 20.2962 15.0966Z" />
            <path d="M48.9188 0.94141H3.68057H0.660156V4.75677H3.68057C8.2029 4.75677 12.5443 5.89025 16.3829 8.01949C18.2582 9.05838 20.0124 10.3363 21.6089 11.8348C21.8396 12.0506 22.0669 12.2713 22.2926 12.497C23.1092 13.3202 23.8643 14.1881 24.5563 15.0976C25.4774 16.3024 26.2872 17.5786 26.9826 18.9113C28.9276 22.6536 29.9615 26.8424 29.9615 31.1971V50.707H33.7769V31.1971C33.7769 26.8938 32.894 22.7283 31.2145 18.9113H48.9188V15.0976H29.1948C28.4862 13.9641 27.6979 12.8737 26.8365 11.8348H48.9188V8.01949H23.061C21.594 6.77481 20.024 5.68447 18.3727 4.75677H48.9188V0.94141Z" />
          </g>
        </svg>
      </MUISvgIcon>
    </FlexBox>
  );
};

export default TelicentMark;
