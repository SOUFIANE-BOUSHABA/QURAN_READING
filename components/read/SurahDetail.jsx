import React from 'react';
import Link from 'next/link';

const SurahDetail = ({ surah }) => {
  return (
    <div className="max-w-[900px] min-h-[900px] container mx-auto px-5 md:px-0 text-white z-[20]">
      <div className="border-b border-gray-500 border-dashed pt-10 text-right pb-10 mb-10 z-[20]">
      <Link className="mb-4  block text-blue-600 z-[20]" href="/">
          العودة إلى الصفحة الرئيسية
        </Link>
        <h2 className="text-3xl mb-2">{surah.name}</h2>
        <p className="text-gray-400 font-light text-xl">
          {surah.name_arabic} | {surah.englishNameTranslation} | {surah.numberOfAyahs} آيات
        </p>
      </div>
      <div className="mb-10 flex flex-col  border-2 border-[#2A0E61] border-dashed px-10 py-4 gap-10 z-[20]">
        {surah.ayahs.map((ayah) => (
          <div
            className="text-xl text-right flex flex-row-reverse items-end gap-4"
            key={ayah.number}
          >
            <p className="font-uthmani text-2xl z-[20]">{ayah.text}</p>
            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full p-2 border border-gray-300 text-sm z-[20]">
              {ayah.numberInSurah}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahDetail;
