import React, { useState } from 'react';
import { Search, Globe, Menu, User, MapPin } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <svg viewBox="0 0 1000 1000" role="img" aria-hidden="false" aria-label="Airbnb Homepage" focusable="false" style={{'height': '2em', 'width': '2em', 'display': 'block', 'fill': 'currentcolor'}} ><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="17" viewBox="0 0 63 17" class="lx6s26y dir dir-ltr"><path d="M6.16 16.61a4.76 4.76 0 01-3.72-1.7 6.14 6.14 0 01-1.5-4.21A6.52 6.52 0 012.5 6.4a5.03 5.03 0 013.84-1.74 4.07 4.07 0 013.49 1.8L9.92 5h2.76v11.32H9.92l-.1-1.65a4.25 4.25 0 01-3.66 1.95zm.72-2.7a2.8 2.8 0 001.47-.42c.42-.3.75-.7 1.02-1.17.25-.48.37-1.05.37-1.68 0-.63-.12-1.2-.37-1.69-.24-.48-.6-.87-1.02-1.17a2.8 2.8 0 00-2.94 0c-.42.3-.75.7-1.02 1.17a3.75 3.75 0 00-.36 1.69 3.21 3.21 0 001.38 2.85c.45.27.93.42 1.47.42zM17.4 1.93c0 .33-.06.63-.2.87a1.73 1.73 0 01-1.5.8c-.3 0-.6-.05-.88-.2a1.73 1.73 0 01-.63-.6 1.7 1.7 0 01-.21-.87c0-.33.06-.63.21-.87.15-.27.36-.45.63-.6.27-.15.57-.21.87-.21.3 0 .6.06.87.2.27.16.48.37.63.6.12.25.21.52.21.88zm-3.21 14.35V4.96h3v11.32h-3zM25.2 7.93v.03c-.15-.06-.33-.09-.48-.12-.18-.03-.33-.03-.51-.03-.84 0-1.47.24-1.9.75-.44.51-.65 1.24-.65 2.17v5.55h-3V4.96h2.76l.09 1.71c.3-.6.66-1.05 1.17-1.38a2.94 2.94 0 011.71-.48c.21 0 .42.03.6.06.1.03.15.03.21.06v3zm1.2 8.35V.31h3v6.1c.43-.55.9-.97 1.5-1.3a4.76 4.76 0 015.74 1.23 6.13 6.13 0 011.5 4.2 6.52 6.52 0 01-1.56 4.3c-.48.54-1.05 1-1.7 1.3-.67.3-1.36.44-2.14.44a4.07 4.07 0 01-3.49-1.8l-.09 1.47-2.76.03zm5.8-2.37a2.8 2.8 0 001.47-.42c.42-.3.75-.7 1.02-1.17.24-.48.36-1.05.36-1.68 0-.63-.12-1.2-.36-1.69-.27-.48-.6-.87-1.02-1.17a2.8 2.8 0 00-2.94 0c-.42.3-.75.7-1.02 1.17a3.75 3.75 0 00-.37 1.69c0 .63.13 1.2.37 1.68s.6.87 1.02 1.17c.45.27.93.42 1.47.42zm7.08 2.37V4.96h2.77l.09 1.47a3.72 3.72 0 013.33-1.77 3.77 3.77 0 013.6 2.28c.34.72.52 1.6.52 2.59v6.78h-3v-6.4c0-.78-.19-1.4-.55-1.86-.36-.45-.84-.69-1.47-.69-.45 0-.84.1-1.2.3-.33.21-.6.48-.81.87-.21.36-.3.82-.3 1.27v6.48h-2.98zm11.8 0V.31h3.01v6.1c.42-.55.9-.97 1.5-1.3a4.76 4.76 0 015.74 1.23 6.13 6.13 0 011.5 4.2 6.52 6.52 0 01-1.56 4.3 5.03 5.03 0 01-3.84 1.74 4.07 4.07 0 01-3.49-1.8l-.1 1.47-2.75.03zm5.83-2.37a2.8 2.8 0 001.47-.42c.42-.3.75-.7 1.02-1.17.25-.48.37-1.05.37-1.68 0-.63-.12-1.2-.37-1.69-.24-.48-.6-.87-1.02-1.17a2.8 2.8 0 00-2.94 0c-.42.3-.75.7-1.02 1.17a3.38 3.38 0 00-.36 1.69 3.21 3.21 0 001.38 2.85c.45.27.9.42 1.47.42z"></path></svg>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow">
              <button className="font-medium px-4 border-r">Anywhere</button>
              <button className="font-medium px-4 border-r">Any week</button>
              <button className="text-gray-600 px-4">Add guests</button>
              <button className="bg-[#FF385C] p-2 rounded-full text-white">
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end flex-1 space-x-4">
            <button className="hidden md:block font-medium rounded-full hover:bg-gray-100 px-4 py-2">
              Airbnb your home
            </button>
            <button className="hidden md:flex items-center rounded-full hover:bg-gray-100 p-2">
              <Globe size={18} />
            </button>
            <div className="flex items-center border rounded-full p-2 space-x-2 shadow-sm hover:shadow-md">
              <Menu size={18} />
              <div className="bg-gray-500 rounded-full p-1">
                <User size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}