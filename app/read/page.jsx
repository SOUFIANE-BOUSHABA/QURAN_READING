// app/read/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchFilter from '@/components/read/SearchFilter';
import SurahList from '@/components/read/SurahList';

export default function Read() {
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [allSurahs, setAllSurahs] = useState([]);

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
          type: surah.revelation_place,
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
      filtered = filtered.filter((surah) => surah.type.toLowerCase() === filter.toLowerCase());
    }

    setFilteredSurahs(filtered);
  }, [searchTerm, filter, allSurahs]);

  return (
    <main className="h-full text-white w-full">
      <div className="flex container mx-auto flex-col gap-20 z-[30]">
        <SearchFilter onSearch={setSearchTerm} onFilter={setFilter} />
        <SurahList surahs={filteredSurahs} />
      </div>
    </main>
  );
}
