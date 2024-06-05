import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, tafsir, fetchTafsir }) => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState('');
  const [ayahs, setAyahs] = useState([]);
  const [selectedAyah, setSelectedAyah] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchSurahs();
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedSurah) {
      fetchAyahs(selectedSurah);
    }
  }, [selectedSurah]);

  const fetchSurahs = async () => {
    try {
      const response = await axios.get('https://api.quran.com/api/v4/chapters');
      const surahs = response.data.chapters.map((surah) => ({
        number: surah.id,
        name: surah.name_simple,
        name_arabic: surah.name_arabic,
        verses_count: surah.verses_count,
        englishName: surah.translated_name.name,
        type: surah.revelation_place,
      }));
      setSurahs(surahs);
    } catch (error) {
      console.error('Error fetching Surahs:', error);
    }
  };

  const fetchAyahs = async (surahNumber) => {
    try {
      const response = await axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahNumber}`);
      setAyahs(response.data.verses);
    } catch (error) {
      console.error('Error fetching ayahs:', error);
    }
  };

  const handleSurahChange = (event) => {
    setSelectedSurah(event.target.value);
    setSelectedAyah(''); 
  };

  const handleAyahChange = (event) => {
    const ayahNumber = event.target.value;
    setSelectedAyah(ayahNumber);
    fetchTafsir(selectedSurah, ayahNumber);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed container max-w-[900px] mx-auto min-h-[500px] inset-0 flex items-center text-slate-900 justify-center bg-black bg-opacity-50 z-[30]">
      <div className="bg-white p-8 rounded-lg relative">
        <div className="flex items-start gap-20 justify-between mb-4">

        
        <div className="flex gap-4 mb-4 items-center">
          <label htmlFor="surah" className="text-lg">Select Surah:</label>
          <select id="surah" className="border border-gray-300 rounded-md p-2" value={selectedSurah} onChange={handleSurahChange}>
            <option value="">Select Surah</option>
            {surahs.map((surah) => (
              <option key={surah.number} value={surah.number}>{surah.name}</option>
            ))}
          </select>
          <label htmlFor="ayah" className="text-lg">Select Ayah:</label>
          <select id="ayah" className="border border-gray-300 rounded-md p-2" value={selectedAyah} onChange={handleAyahChange} disabled={!selectedSurah}>
            <option value="">Select Ayah</option>
            {ayahs.map((ayah) => (
              <option key={ayah.verse_key} value={ayah.verse_key.split(':')[1]}>{ayah.verse_key}</option>
            ))}
          </select>
        </div>

        <button className=" top-0 right-0  text-slate-900 rounded-full w-[70px] h-[40px] bg-zinc-100 hover:bg-zinc-200" onClick={onClose}>
          x
        </button>
        </div>
      
        <p className='text-right'>{tafsir}</p>
      </div>
    </div>
  );
};

export default Modal;
