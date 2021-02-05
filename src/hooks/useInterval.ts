import { useEffect, useRef } from 'react';
import { EMPTY_DELAY } from '../utils/constants';

const useInterval = (callback: () => void, delay?: number | null) => {
  const savedCallback = useRef<() => void>(() => {
    // do nothing.
  });

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => savedCallback.current(), delay || EMPTY_DELAY);

      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export default useInterval;