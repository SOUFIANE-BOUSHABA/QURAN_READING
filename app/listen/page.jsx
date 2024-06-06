// app/listen/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchFilter from '@/components/listen/SearchFilter';
import SurahList from '@/components/listen/SurahList';
import Modal from '@/components/listen/Modal';

export default function Listen() {
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [allSurahs, setAllSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get('https://api.quran.com/api/v4/chapters');
        const surahs = response.data.chapters.map((surah) => ({
          number: surah.id,
          name: surah.name_simple,
          name_arabic: surah.name_arabic,
          verses_count: surah.verses_count,
          englishName: surah.translated_name.name,
          type: surah.revelation_place.toLowerCase(), 
        }));
        setAllSurahs(surahs);
        setFilteredSurahs(surahs);
      } catch (error) {
        console.error('Error fetching Surahs:', error);
      }
    };

    fetchSurahs();
  }, []);

  useEffect(() => {
    let filtered = allSurahs;

    if (searchTerm) {
      filtered = filtered.filter((surah) =>
        surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surah.englishName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter) {
      filtered = filtered.filter((surah) => surah.type === filter.toLowerCase());
    }

    setFilteredSurahs(filtered);
  }, [searchTerm, filter, allSurahs]);

  const fetchAudioFile = async (surahNumber) => {
    try {
      const response = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/1/${surahNumber}`);
      setAudioUrl(response.data.audio_file.audio_url);
    } catch (error) {
      console.error('Error fetching audio file:', error);
    }
  };

  const handleSurahClick = (surah) => {
    setSelectedSurah(surah);
    fetchAudioFile(surah.number);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSurah(null);
    setAudioUrl('');
  };

  return (
    <main className="h-full text-white w-full">
      <div className="flex container mx-auto flex-col gap-20 z-[30]">
        <SearchFilter onSearch={setSearchTerm} onFilter={setFilter} />
        <SurahList surahs={filteredSurahs} onSurahClick={handleSurahClick} />
      </div>
      {isModalOpen && selectedSurah && (
        <Modal surah={selectedSurah} audioUrl={audioUrl} onClose={closeModal} />
      )}
    </main>
  );
}
