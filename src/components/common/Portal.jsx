import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children }) => {
  const el = React.useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    const target = document.body;

    target.appendChild(el);

    return () => {
      target.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};
