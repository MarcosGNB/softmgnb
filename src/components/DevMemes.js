import React, { useState } from 'react';

const DevMemes = () => {
  const [currentMeme, setCurrentMeme] = useState(0);

  const memes = [
    { 
      image: "👨💻", 
      text: "Cuando el cliente dice 'es solo un pequeño cambio'" 
    },
    { 
      image: "🤖", 
      text: "Mi código vs. lo que esperaba el cliente" 
    },
    { 
      image: "🛌", 
      text: "Programador durmiendo: 'seguramente mañana encontré el bug'" 
    }
  ];

  const nextMeme = () => {
    setCurrentMeme((prev) => (prev + 1) % memes.length);
  };

  return (
    <div className="bg-indigo-50 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-indigo-800">Dev Memes</h3>
        <button 
          onClick={nextMeme}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Siguiente →
        </button>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
        <div className="text-6xl mb-3">{memes[currentMeme].image}</div>
        <p className="text-gray-800 italic">"{memes[currentMeme].text}"</p>
        <div className="mt-3 text-xs text-gray-400">#MGNB_Humor</div>
      </div>
    </div>
  );
};

export default DevMemes;