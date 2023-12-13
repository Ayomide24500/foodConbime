// ShineComponent.js
import React, { useEffect, useState } from "react";

const ShineComponent = () => {
  const [showShine, setShowShine] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowShine(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="container relative h-200 overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-yellow-500"
      >
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
      {showShine && <div className="shine"></div>}
    </div>
  );
};

export default ShineComponent;
