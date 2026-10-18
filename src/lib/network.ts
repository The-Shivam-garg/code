import { useEffect, useState } from "react";

type NetInfo = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (t: string, f: () => void) => void;
  removeEventListener?: (t: string, f: () => void) => void;
};

/** True when the visitor asked to save data or is on a 2G-class connection. */
export function isLowBandwidth(info: NetInfo | undefined): boolean {
  if (!info) return false;
  return Boolean(info.saveData) || info.effectiveType === "slow-2g" || info.effectiveType === "2g";
}

export function useLowBandwidth() {
  const [low, setLow] = useState(false);
  useEffect(() => {
    const info = (navigator as Navigator & { connection?: NetInfo }).connection;
    const update = () => setLow(isLowBandwidth(info));
    update();
    info?.addEventListener?.("change", update);
    return () => info?.removeEventListener?.("change", update);
  }, []);
  return low;
}
