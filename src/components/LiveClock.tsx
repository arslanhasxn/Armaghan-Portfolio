import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { formatLocalTime } from "@/lib/utils";

export function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(formatLocalTime(siteConfig.timezone));
    };

    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span suppressHydrationWarning className="tabular-nums">
      {time || "—"}
    </span>
  );
}
