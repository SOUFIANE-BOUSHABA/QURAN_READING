// components/SurahList.jsx
import React from 'react';

const SurahList = ({ surahs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-[20]">
      {surahs.map((surah) => (
        <div key={surah.number} className="p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-bold">{surah.name}</h2>
          <p className="text-gray-600">{surah.englishName}</p>
        </div>
      ))}
    </div>
  );
};

export default SurahList;
