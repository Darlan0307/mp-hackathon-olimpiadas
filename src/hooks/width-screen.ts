import { useEffect, useState } from "react";

export function useWidthScreen() {
  const [widthScreen, setWidthScreen] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return widthScreen;
}
