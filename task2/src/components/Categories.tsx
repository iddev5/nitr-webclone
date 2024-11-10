import React from 'react';
import { Home, Building2, Tent, Mountain, Waves, Flame } from 'lucide-react';

const categories = [
  { label: 'Amazing views', icon: Flame },
  { label: 'Rooms', icon: Home },
  { label: 'Apartments', icon: Building2 },
  { label: 'Camping', icon: Tent },
  { label: 'Mountains', icon: Mountain },
  { label: 'Beach', icon: Waves },
];

export default function Categories() {
  return (
    <div className="flex items-center justify-between overflow-x-auto pt-20 pb-6 px-8">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.label}
            className="flex flex-col items-center min-w-[80px] gap-2 p-2 hover:text-[#FF385C] transition-colors"
          >
            <Icon className="h-6 w-6" />
            <span className="text-sm font-medium">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}