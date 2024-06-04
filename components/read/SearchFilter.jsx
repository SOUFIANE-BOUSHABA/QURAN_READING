// components/SearchFilter.jsx
import React, { useState } from 'react';

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex container mx-auto  gap-4 justify-end mb-4 mt-8 z-[20]">
      <input
        type="text"
        placeholder="ابحث عن سورة..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 shadow-lg border-2 border-[#2A0E61] rounded h-10 w-96 text-right bg-transparent text-white placeholder-white"
      />
      <select 
        onChange={(e) => onFilter(e.target.value)} 
        className="p-2 shadow-lg border-2 border-[#2A0E61] rounded h-10 w-96 text-right bg-transparent text-white">
        <option value="" className="bg-gray-800">الكل</option>
        <option value="Meccan" className="bg-gray-800">السور المكية</option>
        <option value="Medinan" className="bg-gray-800">السور المدنية</option>
      </select>
    </div>
  );
};

export default SearchFilter;
