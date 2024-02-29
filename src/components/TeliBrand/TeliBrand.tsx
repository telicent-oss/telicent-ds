import React from "react";
import classNames from "classnames";
import { StandardLayoutProps } from "../../types/layout";
import "./telibrand.css";
import { z } from "zod";

export interface TeliBrandProps
  extends StandardLayoutProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * How big should the brand component be?
   * @default base
   */
  size?: "base" | "jumbo";
  /**
   * URL
   */
  href?: string;
  /**
   * Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).
   */
  target?: string;
  /**
   * The relationship of the linked URL as space-separated link types
   */
  rel?: string;
}

/**
 * Note: The application color is taken from index.css
 */
const TeliBrand: React.FC<TeliBrandProps> = ({
  appName,
  beta,
  size = "base",
  className: brandClassName,
  ...linkProps
}) => {
  const isDefaultSize = size === "base";
  const isJumboSize = size === "jumbo";

  const validateAppName = z
    .string({
      required_error: "Provide missing appName prop.",
      invalid_type_error: "appName must be a string",
    })
    .safeParse(appName);

  if (!validateAppName.success) {
    console.error(`Telicent DS (TeliBrand): ${validateAppName?.error}`);
  }

  return (
    <a
      className={classNames(
        "teli-brand",
        {
          "cursor-default": !linkProps?.href,
          "cursor-pointer": linkProps?.href,
        },
        brandClassName
      )}
      {...linkProps}
    >
      <h1
        className={classNames("teli-brand__heading", {
          "teli-brand__heading--base": isDefaultSize,
          "teli-brand__heading--jumbo": isJumboSize,
        })}
      >
        <span className="teli-brand-org">telicent</span>
        {appName && <span className="teli-app-name">{appName}</span>}
      </h1>
      {beta && (
        <div
          className={classNames("beta-badge", {
            "mb-1": isDefaultSize,
            "beta-badge-jumbo": isJumboSize,
          })}
        >
          BETA
        </div>
      )}
    </a>
  );
};

export default TeliBrand;
