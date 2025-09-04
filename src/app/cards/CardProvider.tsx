
"use client"
import { Appartment } from './Appartment';
import { Rentee } from './Rentee';
import React, { useState } from 'react';
import { IAppartment, Rentees } from '../models/cards';

// Type guard for IAppartment
function isAppartment(card: IAppartment | Rentees): card is IAppartment {
  return card.type === 'appartment';
}

// Type guard for Rentees
function isRentee(card: IAppartment | Rentees): card is Rentees {
  return card.type === 'rentee';
}

export const CardProvider = ({ cardsArr }: { cardsArr: (IAppartment | Rentees)[] }) => {
  const [cards, setCards] = useState<(IAppartment | Rentees)[]>(cardsArr);
  const handleSwipe = (id: number, direction: 'left' | 'right') => {
    setCards((prev) => prev.filter((a) => a.id !== id));
    // Optionally handle rating/like/dislike here
  };
  return (
    <div style={{ position: 'relative', height: 420, width: 320 }}>
      {cards.length > 0 && (
        isAppartment(cards[0]) ? (
          <Appartment
            key={cards[0].id}
            title={cards[0].title}
            description={cards[0].description}
            images={cards[0].images}
            onSwipe={(dir) => handleSwipe(cards[0].id, dir)}
            datePosted={cards[0].datePosted}
            priceDetails={cards[0].priceDetails}
          />
        ) : isRentee(cards[0]) ? (
          <Rentee
            key={cards[0].id}
            name={cards[0].name}
            image={cards[0].image}
            description={cards[0].description}
            datePosted={cards[0].datePosted}
            onSwipe={(dir) => handleSwipe(cards[0].id, dir)}
          />
        ) : null
      )}
    </div>
  );
}