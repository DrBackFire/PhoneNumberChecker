import { useState, useEffect } from "react";
import { throttle } from "lodash";

type BreakPoints = "xs" | "sm" | "md" | "lg";

const getDeviceConfig = (width: number): BreakPoints => {
  if (width < 320) {
    return "xs";
  }

  if (width >= 320 && width < 720) {
    return "sm";
  }

  if (width >= 720 && width < 1024) {
    return "md";
  }

  return "lg";
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
