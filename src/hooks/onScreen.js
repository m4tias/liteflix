import { useState, useEffect } from 'react';

export default function useOnScreen(element, rootMargin = '0px') {
  const [isVisible, setState] = useState(false);
  useEffect(() => {
    const currentElement = element?.current;
    if (currentElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState(true);
            observer.unobserve(currentElement);
          }
        },
        { rootMargin }
      );

      observer.observe(currentElement);

      return () => {
        observer.unobserve(currentElement);
      };
    }
  }, [element, rootMargin]);

  return isVisible;
}
