import React, { useEffect, useState } from 'react';

export default function ArrowToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-4 lg:right-20 w-[46px] h-[46px] rounded-full bg-secondary-1 cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-105 z-40"
          title="Back to top"
        >
          <img
            src="/images/icons/Carousel/Arrow.png"
            alt="Arrow to Top"
            className="-rotate-90"
          />
        </div>
      )}
    </div>
  );
}
