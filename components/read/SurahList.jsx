import React from 'react';
import Link from 'next/link';

const SurahList = ({ surahs }) => {
  return (
    <div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-4 z-[20]">
      {surahs.map((surah) => (
        <Link key={surah.number} href={`/read/${surah.number}`} >
          <div className="p-4 border flex justify-between items-center border-gray-300 rounded hover:bg-[#2A0E61]">
            <div className="flex">
              <div className="bg-[#2A0E61] text-white rounded w-12 h-12 flex items-center justify-center mr-2">
                {surah.number}
              </div>
            </div>
            <div className="flex w-3/4 justify-between">
              <div>
                <h2 className="text-xl font-bold">{surah.name}</h2>
                <p className="text-gray-600 mt-2">{surah.englishName}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold">{surah.name_arabic}</h2>
                <p className="bg-[#2A0E61] mt-2 text-white rounded-full w-12 h-[20] flex items-center justify-center mr-2">{surah.verses_count}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SurahList;