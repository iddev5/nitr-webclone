import hero from '../assets/hero.webp';
import { Search } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Hero() {
    return <>
        <div className="flex flex-col items-end">
            <div className='p-3'>
                <img className="rounded-lg" src={hero} />
            </div>

            <div className="absolute top-0 left-0 w-full h-full">
                <div className="container mx-auto px-4 h-full flex items-center">
                <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">Holiday rentals in India</h1>
                    <p className="text-gray-600 mb-6">Find and book unique accommodation on Airbnb</p>
                    
                    <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">LOCATION</label>
                        <input
                        type="text"
                        value="India"
                        className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CHECK IN</label>
                        <DatePicker
                            onChange={() => {}}
                            placeholderText="Add Date"
                            className="w-full p-3 border rounded-lg"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CHECK OUT</label>
                        <DatePicker
                            onChange={() => {}}
                            placeholderText="Add Date"
                            className="w-full p-3 border rounded-lg"
                        />
                        </div>
                    </div>
                    
                    
                    <button 
                        onClick={() => {}}
                        className="w-full bg-rose-500 text-white py-4 rounded-lg font-medium hover:bg-rose-600 transition flex items-center justify-center gap-2"
                    >
                        <Search size={20} />
                        Search
                    </button>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </>
}