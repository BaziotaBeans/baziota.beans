import React from "react";

export const useClickInsideHTMLUlElement = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    if (
      ref.current &&
      ref.current.contains(e.target) &&
      e.target?.nodeName.toLowerCase() == "a"
    ) {
      console.log(e.target);
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
