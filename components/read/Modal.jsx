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
    <div className="fixed inset-0 flex items-center justify-center text-zinc-700 bg-black bg-opacity-50 z-[30] px-4">
      <div className="bg-white p-8 rounded-lg relative w-full max-w-[900px] mx-auto min-h-[300px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4 md:gap-20">
          <button
            className="md:absolute md:top-4 md:right-4 text-slate-900 order-1 md:order-2 rounded-full w-10 h-10 bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="flex flex-col md:flex-row gap-4 text-black items-center w-full order-2 md:order-1">
            <label htmlFor="surah" className="text-lg">Select Surah:</label>
            <select
              id="surah"
              className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
              value={selectedSurah}
              onChange={handleSurahChange}
            >
              <option value="">Select Surah</option>
              {surahs.map((surah) => (
                <option key={surah.number} value={surah.number}>{surah.name}</option>
              ))}
            </select>
            <label htmlFor="ayah" className="text-lg">Select Ayah:</label>
            <select
              id="ayah"
              className="border border-gray-300 rounded-md p-2 w-full md:w-auto"
              value={selectedAyah}
              onChange={handleAyahChange}
              disabled={!selectedSurah}
            >
              <option value="">Select Ayah</option>
              {ayahs.map((ayah) => (
                <option key={ayah.verse_key} value={ayah.verse_key.split(':')[1]}>{ayah.verse_key}</option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-right">{tafsir}</p>
      </div>
    </div>
  );
};

export default Modal;