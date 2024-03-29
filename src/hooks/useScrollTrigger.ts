import { useEffect, useState } from "react";

export const useScrollTrigger = (isDistance: boolean) => {
  const [classScrollTrigger, setClassScrollTrigger] = useState("");

  useEffect(() => {
    const { innerWidth } = window;
    if (innerWidth >= 1440) {
      if (isDistance) {
        setClassScrollTrigger("transition");
      } else if (!isDistance) {
        setClassScrollTrigger("");
      }
    }
    //eslint-disable-next-line
  }, [document.documentElement.scrollTop, isDistance]);

  return classScrollTrigger;
};
