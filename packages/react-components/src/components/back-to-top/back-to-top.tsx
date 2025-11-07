import { faChevronUp } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type BackToTopProps = {
  className?: string;
  threshold?: number;
};

export function BackToTop({ className, threshold = 100 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const classes = twMerge(
    'fixed right-4 bottom-4 z-50 rounded-full bg-black p-2 text-white shadow-md',
    !isVisible && 'hidden',
    className,
  );

  return (
    <button onClick={handleClick} className={`uofg-back-to-top ${classes}`}>
      <span className="sr-only">Back to top</span>
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}
