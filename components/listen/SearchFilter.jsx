// components/SearchFilter.jsx
import React, { useState } from 'react';

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex container px-4 mx-auto gap-4 justify-end mb-4 mt-8 z-[20]">
      <label htmlFor="search-input" className="hidden">Search</label>
      <input
        id="search-input"
        type="text"
        placeholder="ابحث عن سورة..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 shadow-lg border-2 border-[#2A0E61] rounded h-10 w-96 text-right bg-transparent text-white placeholder-white"
      />
      
      <label htmlFor="filter-select" className="hidden">Filter</label>
      <select 
        id="filter-select"
        onChange={(e) => onFilter(e.target.value)} 
        className="p-2 shadow-lg border-2 border-[#2A0E61] rounded h-10 w-96 text-right bg-transparent text-white">
        <option value="" className="bg-gray-800">الكل</option>
        <option value="makkah" className="bg-gray-800">السور المكية</option>
        <option value="madinah" className="bg-gray-800">السور المدنية</option>
      </select>
    </div>
  );
};

export default SearchFilter;
