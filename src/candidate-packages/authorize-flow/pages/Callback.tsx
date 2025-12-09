import { FC, useEffect } from "react";
import { TeliSpinner } from "../../../export";

interface CallbackProps {
  clientId: string;
}
export const Callback: FC<CallbackProps> = ({ clientId }) => {
  useEffect(() => {
    setTimeout(() => {
      const event = new CustomEvent("oauth-callback", {
        detail: {
          callbackUrl: window.location.href,
          clientId: clientId
        },
      });
      window.dispatchEvent(event);
    }, 0)
  }, [clientId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "0.5rem",
      }}
    >
      <TeliSpinner size={64} style={{ color: "rgba(255,255,255,0.5)" }} />
      <p>Logging you in. You'll be redirected shortly.</p>
    </div>
  );

}
