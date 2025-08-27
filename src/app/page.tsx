"use client"
import { Theme } from '@radix-ui/themes';
import { Appartment } from './Appartment';
import React, { useState } from 'react';

const appartments = [
  {
    id: 1,
    title: 'Sunny Loft in City Center',
    description: 'A beautiful, sunlit loft in the heart of the city. 2 beds, 1 bath.',
    images: ['/wombat.jpg', '/samoyed.jpg', '/Adult-capybara.webp'],
  },
  {
    id: 2,
    title: 'Cozy Suburban Home',
    description: 'Quiet neighborhood, perfect for families. 3 beds, 2 baths.',
    images: ['/wombat.jpg', '/samoyed.jpg', '/Adult-capybara.webp'],
  },
  {
    id: 3,
    title: 'Modern Apartment with View',
    description: 'Stunning views, modern amenities, close to transport.',
    images: ['/Adult-capybara.webp', '/wombat.jpg', '/samoyed.jpg'],
  },
];

export default function Home() {
  const [cards, setCards] = useState(appartments);

  const handleSwipe = (id: number, direction: 'left' | 'right') => {
    setCards((prev) => prev.filter((a) => a.id !== id));
    // Optionally handle rating/like/dislike here
  };

  return (
    <Theme accentColor="purple">
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-background)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {cards.map((a, i) => (
          <Appartment
            key={a.id}
            title={a.title}
            description={a.description}
            images={a.images}
            onSwipe={(dir) => handleSwipe(a.id, dir)}
          />
        )).reverse()}
      </div>
    </Theme>
  );
}
