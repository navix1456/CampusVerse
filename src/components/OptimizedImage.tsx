import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const OptimizedImage = ({ src, alt, className, width, height }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Check if image is in cache
    const cachedImage = localStorage.getItem(`img_${src}`);
    if (cachedImage) {
      setImageSrc(cachedImage);
      setIsLoaded(true);
      return;
    }

    // Load image and cache it
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      // Cache the image URL
      localStorage.setItem(`img_${src}`, src);
    };
  }, [src]);

  return (
    <img
      src={imageSrc || src}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default OptimizedImage; 