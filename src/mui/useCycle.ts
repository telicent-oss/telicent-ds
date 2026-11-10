import { useEffect, useState } from "react";

/**
 * Flips a boolean on an interval so a transition story plays continuously.
 * Without it a transition rendered with a static `in` sits at its end state
 * and shows nothing — but the theme owns `transitions.duration` and
 * `transitions.easing`, so the timing is worth seeing.
 */
const useCycle = (intervalMs = 1600): boolean => {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setOn((prev) => !prev), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return on;
};

export default useCycle;
