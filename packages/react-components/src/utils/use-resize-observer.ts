import { useEffect, useRef, useState } from 'react';

export function useResizeObserver<T extends HTMLElement>() {
  const [entry, setEntry] = useState<ResizeObserverEntry | null>(null);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries, _observer) => {
      const entry = entries[0];

      if (!entry) return;

      setEntry(entry);
    });

    observer.observe(ref.current);

    return () => {
      return observer.disconnect();
    };
  }, [ref.current]);

  return [ref, entry] as const;
}
