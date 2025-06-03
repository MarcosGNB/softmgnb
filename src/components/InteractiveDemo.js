import React, { useState } from 'react';

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('preview');
  const [code, setCode] = useState('<button class="btn">Haz clic</button>');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="flex border-b dark:border-gray-700">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-4 py-3 font-medium ${activeTab === 'preview' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Vista Previa
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-3 font-medium ${activeTab === 'code' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Código
        </button>
      </div>
      
      <div className="p-6">
        {activeTab === 'preview' ? (
          <div 
            className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md"
            dangerouslySetInnerHTML={{ __html: code }}
          />
        ) : (
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 font-mono text-sm p-3 bg-gray-50 dark:bg-gray-900 dark:text-gray-200 rounded-md"
          />
        )}
      </div>
      
      <div className="px-6 pb-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
          Probar en Vivo
        </button>
      </div>
    </div>
  );
};

export default InteractiveDemo;