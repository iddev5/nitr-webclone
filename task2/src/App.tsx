import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import PropertyCard from './components/PropertyCard';

const properties = [
  {
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    title: "Luxury Villa in Bali",
    distance: "4,205 kilometers away",
    date: "Oct 15-20",
    price: "$350",
    rating: 4.98
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80",
    title: "Modern Apartment in New York",
    distance: "2,891 kilometers away",
    date: "Nov 1-6",
    price: "$250",
    rating: 4.85
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    title: "Beachfront House in Malibu",
    distance: "3,156 kilometers away",
    date: "Sep 25-30",
    price: "$450",
    rating: 4.92
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
    title: "Mountain Cabin in Swiss Alps",
    distance: "5,891 kilometers away",
    date: "Dec 10-15",
    price: "$280",
    rating: 4.89
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    title: "Cozy Cottage in London",
    distance: "1,256 kilometers away",
    date: "Oct 5-10",
    price: "$200",
    rating: 4.95
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Penthouse in Dubai",
    distance: "6,123 kilometers away",
    date: "Nov 20-25",
    price: "$500",
    rating: 4.97
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
    title: "Tropical Villa in Maldives",
    distance: "7,845 kilometers away",
    date: "Jan 5-10",
    price: "$600",
    rating: 4.99
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
    title: "Historic Apartment in Paris",
    distance: "2,345 kilometers away",
    date: "Oct 25-30",
    price: "$320",
    rating: 4.88
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto">
        <Categories />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </main>
      <footer className="mt-16 border-t">
        <div className="container mx-auto px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Help Center</li>
                <li>AirCover</li>
                <li>Safety information</li>
                <li>Supporting people with disabilities</li>
                <li>Cancellation options</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Airbnb.org: disaster relief housing</li>
                <li>Combating discrimination</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hosting</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Airbnb your home</li>
                <li>AirCover for Hosts</li>
                <li>Hosting resources</li>
                <li>Community forum</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Airbnb</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Newsroom</li>
                <li>New features</li>
                <li>Careers</li>
                <li>Investors</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-600">© 2024 Airbnb Clone. This is a demo project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;