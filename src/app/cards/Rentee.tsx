import React from 'react';
import { Card } from '@radix-ui/themes';

interface RenteeProps {
  name: string;
  image: string;
  description: string;
  datePosted: string;
  onSwipe?: (direction: 'left' | 'right') => void;
}

export const Rentee: React.FC<RenteeProps> = ({ name, image, description, datePosted, onSwipe }) => {
  // You can add swipe logic similar to Appartment if needed
  return (
    <Card style={{ width: 350, height: 450, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'absolute', left: 0, right: 0, margin: 'auto', zIndex: 1 }}>
      <div style={{ position: 'relative', width: '100%', height: 220, background: '#eee' }}>
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: 220, objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        />
      </div>
      <div style={{ padding: 20 }}>
        <h2 style={{ margin: 0, fontSize: 24 }}>{name}</h2>
        <p style={{ margin: '8px 0 0', color: 'var(--color-foreground)' }}>{description}</p>
        <div className="pt-3">
          <p style={{ margin: '8px 0 0', color: 'var(--color-foreground)', fontSize: 10, textAlign: 'right' }}>{datePosted}</p>
        </div>
      </div>
    </Card>
  );
};
