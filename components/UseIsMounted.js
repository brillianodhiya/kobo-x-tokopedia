import { useRef, useEffect } from "react";

// A custom hook that returns true if the component is mounted on the client
function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    // Set isMounted to true when the component is mounted
    isMounted.current = true;
    // Set isMounted to false when the component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}

export { useIsMounted };
