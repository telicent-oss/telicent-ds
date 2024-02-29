import React, { ReactNode } from "react";
import classNames from "classnames";

import TeliBrand from "../TeliBrand/TeliBrand";
import TeliButton from "../TeliButton/TeliButton";
import styles from "./license.module.css";

interface LicenseProps {
  /**
   * Telicent application name
   */
  appName: string;
  /**
   * Telicent application version (should be the same as the one found in package.json)
   */
  appVersion: string;
  /**
   * License expiration date
   */
  expiryDate?: Date | string;

  /**
   * License copyright text
   */
  licenseCopy: ReactNode;
  /**
   * Handler for when acknowledge button is pressed
   */
  onAcknowledge?: () => void;
}

const License: React.FC<LicenseProps> = ({
  appName,
  appVersion,
  expiryDate,
  licenseCopy,
  onAcknowledge,
}: LicenseProps) => {
  if (!appName) throw new Error("Application name is not provided");
  if (!appVersion) throw new Error("Application version is not provided");
  if (!licenseCopy) throw new Error("Application license copy is not provided");

  const today = new Date();
  const providedExpiryDate = expiryDate ? new Date(expiryDate) : undefined;
  const formattedExpiryDate =
    providedExpiryDate?.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }) || undefined;
  const hasExpired =
    expiryDate && providedExpiryDate ? today >= providedExpiryDate : false;

  return (
    <div className="bg-gradient-to-b from-app-color to-app-color-800 p-2 max-w-4xl rounded">
      <div className="bg-black-100 dark:text-whiteSmoke p-5 flex flex-col gap-y-6 rounded">
        <div className="flex flex-col gap-y-1">
          <TeliBrand appName={appName} className="justify-center" />
          <p className="text-sm text-center font-medium">
            Version {appVersion}
          </p>
        </div>

        <div
          id="license-copy"
          className={classNames(
            "flex flex-col gap-y-5 max-h-48 md:max-h-96 overflow-y-scroll",
            styles["masked-overflow"]
          )}
        >
          {licenseCopy}
        </div>

        <div className="flex flex-col gap-y-2 items-center">
          {hasExpired && <strong>License has expired!</strong>}
          {!hasExpired && formattedExpiryDate && (
            <strong>Expires on {formattedExpiryDate}</strong>
          )}
          <TeliButton variant="primary" onClick={onAcknowledge}>
            Acknowledge
          </TeliButton>
        </div>
      </div>
    </div>
  );
};

export default License;
