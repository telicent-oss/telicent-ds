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
      className="grid place-content-center gap-y-2"
      style={{ height: "calc(100vh - 224px)" }}
    >
      <TeliSpinner size={64} className="mx-auto !text-whiteSmoke-50" />
      <p>Logging you in. You'll be ridirected shortly.</p>
    </div>
  );
}
