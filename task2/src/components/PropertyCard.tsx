import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface PropertyCardProps {
  imageUrl: string;
  title: string;
  distance: string;
  date: string;
  price: string;
  rating: number;
}

export default function PropertyCard({ imageUrl, title, distance, date, price, rating }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-2"
        >
          <Heart
            className={`h-6 w-6 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-white'
            }`}
          />
        </button>
      </div>
      
      <div className="mt-2">
        <div className="flex justify-between">
          <h3 className="font-medium">{title}</h3>
          <div className="flex items-center space-x-1">
            <span>★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-500">{distance}</p>
        <p className="text-gray-500">{date}</p>
        <p className="mt-2">
          <span className="font-semibold">{price}</span> night
        </p>
      </div>
    </div>
  );
}