import { useEffect, useRef, useState } from "react";

export default function useGetElement() {
  const containerRef = useRef();
  // State for the dimensions
  const [size, setSize] = useState({ width: 0, height: 600 });

  // Effect to update dimensions on window resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Call once initially to set size

    return () => window.removeEventListener("resize", updateSize);
  }, []); // Empty dependency array ensures this runs only once on mount

  return [containerRef, size];
}
