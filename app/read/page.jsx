// app/read/page.jsx:
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
        const response = await axios.get('https://api.alquran.cloud/v1/surah');
        const surahs = response.data.data.map((surah) => ({
          number: surah.number,
          name: surah.name,
          englishName: surah.englishName,
          type: surah.revelationType,
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
      <div className="flex container mx-auto flex-col gap-20">
        <SearchFilter onSearch={setSearchTerm} onFilter={setFilter} />
        <SurahList surahs={filteredSurahs} />
      </div>
    </main>
  );
}
