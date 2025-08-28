
"use client"
import { Appartment } from './Appartment';
import React, { useState } from 'react';
import { IAppartment } from '../models/cards';

export const CardProvider = ({ appartments }: { appartments: IAppartment[] }) => {
    const [cards, setCards] = useState(appartments);
    const handleSwipe = (id: number, direction: 'left' | 'right') => {
      setCards((prev) => prev.filter((a) => a.id !== id));
      // Optionally handle rating/like/dislike here
    };
  return (
    <div style={{ position: 'relative', height: 420, width: 320 }}>
    {cards.map((a, i) => (
        <Appartment
          key={a.id}
          title={a.title}
          description={a.description}
          images={a.images}
          onSwipe={(dir) => handleSwipe(a.id, dir)}
          datePosted={a.datePosted}
          priceDetails={a.priceDetails}
        />
      )).reverse()}
      </div>
  )
}