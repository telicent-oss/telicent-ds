import React, { useEffect, useState } from "react";
import { Link } from "@mui/material";

const isInIframe = (): boolean => {
  if (typeof window === "undefined") return false;
  try { return window.self !== window.top; } catch { return true; }
};

type Props = {
  children: React.ReactNode;
  linkText?: string;
  className?: string;
};

export const ForceNoIframe: React.FC<Props> = ({
  children,
  linkText = "Open this view in a new window",
  className,
}) => {
  const [inIframe, setInIframe] = useState(false);
  useEffect(() => { setInIframe(isInIframe()); }, []);

  if (!inIframe) return <>{children}</>;

  const href = typeof window !== "undefined" ? window.location.href : "#";
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
      ↗️  {linkText}
    </Link>
  );
};

