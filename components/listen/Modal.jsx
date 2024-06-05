// components/listen/Modal.jsx
import React from 'react';

const Modal = ({ surah, audioUrl, onClose }) => {
  console.log('Audio URL:', audioUrl); // Debugging: Print the audio URL

  return (
    <div className="fixed inset-0 flex items-center justify-center text-zinc-700 bg-black bg-opacity-50 z-[30] px-4">
      <div className="bg-white p-8 rounded-lg relative w-full max-w-[900px] mx-auto min-h-[300px] ">
       
        <button 
          className="absolute top-4 right-4 border-b border-2 text-slate-900 rounded-full w-10 h-10 bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">{surah.name} - {surah.englishName}</h2>
        <div className="audio-file border-t border-gray-500 border-dashed pt-10  mx-auto min-h-[20px] items-center flex justify-center">
          {audioUrl ? (
            <audio controls className='w-3/4'>
              <source src={audioUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <div class='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
                <span class='sr-only'>Loading...</span>
                <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div class='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div class='h-8 w-8 bg-black rounded-full animate-bounce'></div>
            </div>
          )}
        </div>
      
      </div>
    </div>
  );
};

export default Modal;
