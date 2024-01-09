import React from 'react';
import { categories } from '../lib/data';

const PopularCats = () => {

    return (
        <div className="padding-x padding-y">
            <h2 className="w-full text-2xl md:text-2xl font-bold text-center mb-3">Popular Categories</h2>
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center space-x-2 rounded-lg p-4 shadow-card-100">
                        <div className='mr-3 p-4 bg-[#04AA15] bg-opacity-15 rounded-full border-4 border-[#04AA15]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04AA15" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-lg font-bold">{category.name}</p>
                            <p className="text-sm text-gray-400">{category.count} Courses</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCats;
