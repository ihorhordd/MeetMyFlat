import React, { useState } from 'react';
import { Card, IconButton } from '@radix-ui/themes';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

interface AppartmentProps {
  title: string;
  description: string;
  images: string[];
  onSwipe?: (direction: 'left' | 'right') => void;
  datePosted: string;
}

export const Appartment: React.FC<AppartmentProps> = ({ title, description, images, onSwipe, datePosted }) => {
  const [{ x, y, scale, rot }, api] = useSpring(() => ({ x: 0, y: 0, scale: 1, rot: 0 }));
  const [imgIdx, setImgIdx] = useState(0);

  const bind = useDrag(({ down, movement: [mx, my], direction: [dx], velocity, cancel, canceled }) => {
    if (down && velocity > 1.2) {
      // Swipe detected
      const dir = dx > 0 ? 'right' : 'left';
      api.start({ x: dx > 0 ? 1000 : -1000, rot: dx * 10, scale: 1 });
      setTimeout(() => {
        onSwipe?.(dir as 'left' | 'right');
      }, 200);
      cancel && cancel();
      return;
    }
    api.start({ x: down ? mx : 0, y: down ? my : 0, scale: down ? 1.05 : 1, rot: down ? mx / 20 : 0 });
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((idx) => (idx === images.length - 1 ? 0 : idx + 1));
  };

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        scale,
        rotate: rot,
        touchAction: 'none',
        position: 'absolute',
        left: 0,
        right: 0,
        margin: 'auto',
        width: 320,
        height: 420,
        zIndex: 1,
      }}
      className="card-glow"
    >
      <Card style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'var(--color-background)' }}>
        <div style={{ position: 'relative', width: '100%', height: 220, background: '#eee' }}>
          {images.length > 1 && (
            <IconButton variant="soft" color="purple" style={{ position: 'absolute', top: '50%', left: 8, zIndex: 2, transform: 'translateY(-50%)' }} onClick={handlePrev}>
              <ChevronLeftIcon />
            </IconButton>
          )}
          <img
            src={images[imgIdx]}
            alt={title}
            style={{ width: '100%', height: 220, objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
          />
          {images.length > 1 && (
            <IconButton variant="soft" color="purple" style={{ position: 'absolute', top: '50%', right: 8, zIndex: 2, transform: 'translateY(-50%)' }} onClick={handleNext}>
              <ChevronRightIcon />
            </IconButton>
          )}
          {/* Dots */}
          {images.length > 1 && (
            <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
              {images.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: i === imgIdx ? 'rebeccapurple' : '#ccc',
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <div style={{ padding: 20 }}>
          <h2 style={{ margin: 0, fontSize: 24 }}>{title}</h2>
          <p style={{ margin: '8px 0 0', color: 'var(--color-foreground)' }}>{description}</p>
          <p style={{ margin: '8px 0 0', color: 'var(--color-foreground)', fontSize: 10, textAlign: 'right' }}>{datePosted}</p>
        </div>
      </Card>
    </animated.div>
  );
};
