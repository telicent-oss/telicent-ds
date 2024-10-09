import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import { PopperPlacementType } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import TeliButton from "../TeliButton/TeliButton";
import { TeliAddIcon } from "../TeliIcons";

import "./telitoolbar.css";

export interface TeliToolbarProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * @default true
   */
  defaultControls?: boolean;
  /**
   * @default false
   */
  vertical?: boolean;
  position?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
  variant?: "tertiary" | "basic";
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  children?: React.ReactNode;
}

const TeliToolbar: React.FC<TeliToolbarProps> = ({
  position = "bottom-start",
  defaultControls = true,
  vertical,
  variant = "tertiary",
  onZoomIn,
  onZoomOut,
  children,
}) => {
  const isTertiary = variant === "tertiary";
  const tooltipPlacement: PopperPlacementType =
    position.startsWith("bottom") && !vertical
      ? "top"
      : position.startsWith("bottom") && vertical
      ? "left"
      : "bottom";
  const buttonVariant = isTertiary ? "basic" : "tertiary";

  const DefaultControls = () => (
    <>
      <TeliButton
        aria-label="zoom in"
        tooltip="Zoom in"
        tooltipPlacement={tooltipPlacement}
        variant={buttonVariant}
        onClick={onZoomIn}
      >
        <TeliAddIcon />
      </TeliButton>
      <TeliButton
        aria-label="zoom out"
        tooltip="Zoom out"
        tooltipPlacement={tooltipPlacement}
        variant={buttonVariant}
        onClick={onZoomOut}
      >
        <FontAwesomeIcon icon={faMinus} />
      </TeliButton>
    </>
  );

  return (
    <ul
      className={classNames("toolbar", {
        "toolbar--vertical": vertical,
        "toolbar--tertiary": isTertiary,
        "toolbar--bottom-start": position === "bottom-start",
        "toolbar--bottom-end": position === "bottom-end",
        "toolbar--top-start": position === "top-start",
        "toolbar--top-end": position === "top-end",
      })}
    >
      {defaultControls && <DefaultControls />}
      {children}
    </ul>
  );
};

export default TeliToolbar;
