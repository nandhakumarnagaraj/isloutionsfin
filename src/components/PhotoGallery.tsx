import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const PhotoGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Sample images - replace with your actual images
  const images = [
    { src: '/logo.jpg', alt: 'iSolutions Office' },
    { src: '/placeholder.svg', alt: 'Team Meeting' },
    { src: '/logo.jpg', alt: 'Client Success' },
    { src: '/placeholder.svg', alt: 'Awards' },
    { src: '/logo.jpg', alt: 'Office Space' },
    { src: '/placeholder.svg', alt: 'Team Photo' },
    // Duplicate for seamless loop
    { src: '/logo.jpg', alt: 'iSolutions Office' },
    { src: '/placeholder.svg', alt: 'Team Meeting' },
    { src: '/logo.jpg', alt: 'Client Success' },
    { src: '/placeholder.svg', alt: 'Awards' },
  ];

  useEffect(() => {
    if (isMobile) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = scrollContainer.scrollWidth / 2;
    const scrollSpeed = 2; // Adjust speed (pixels per frame)

    const scroll = () => {
      scrollPosition -= scrollSpeed;

      // Reset scroll when reaching halfway (seamless loop)
      if (scrollPosition <= 0) {
        scrollPosition = scrollContainer.scrollWidth / 2;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => requestAnimationFrame(scroll);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  return (
    <div className="w-full py-8 overflow-hidden bg-gradient-to-r from-navy-deep via-background to-navy-deep">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-6 px-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-48 w-80 rounded-xl overflow-hidden border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:scale-105 shadow-card"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
