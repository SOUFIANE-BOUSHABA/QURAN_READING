// app/read/[surahId]/page.jsx
import React from 'react';
import SurahDetail from '../../../components/read/SurahDetail';

async function getSurahData(surahId) {
  const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahId}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.data;
}

export default async function SurahPage({ params }) {
  const surahId = params.surahId;
  const surah = await getSurahData(surahId);

  return (
    <div>
      <SurahDetail surah={surah} />
    </div>
  );
}
