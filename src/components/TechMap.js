import React, { useState } from 'react';

const TechMap = () => {
  const [activeTech, setActiveTech] = useState(null);

  const technologies = [
    { name: 'React', category: 'frontend', x: '70%', y: '30%', icon: '⚛️' },
    { name: 'Node.js', category: 'backend', x: '30%', y: '50%', icon: '🟢' },
    { name: 'Python', category: 'ai', x: '50%', y: '70%', icon: '🐍' },
    { name: 'Flutter', category: 'mobile', x: '80%', y: '70%', icon: '📱' },
    { name: 'Django', category: 'backend', x: '20%', y: '60%', icon: 'D' }
  ];

  return (
    <div className="relative h-96 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6 text-center">Nuestro Mapa Tecnológico</h3>
      
      <div className="relative w-full h-full">
        {technologies.map((tech) => (
          <button
            key={tech.name}
            onClick={() => setActiveTech(tech)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md transition-all
              ${activeTech === tech ? 'bg-indigo-600 text-white scale-110' : 
                tech.category === 'frontend' ? 'bg-blue-100' :
                tech.category === 'backend' ? 'bg-green-100' :
                tech.category === 'ai' ? 'bg-red-100' : 'bg-yellow-100'}`}
            style={{ left: tech.x, top: tech.y }}
          >
            {tech.icon}
          </button>
        ))}
        
        {activeTech && (
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-b-lg shadow-md">
            <h4 className="font-bold">{activeTech.name}</h4>
            <p className="text-sm text-gray-600 mt-1">
              {activeTech.category === 'frontend' && 'Librería para interfaces de usuario'}
              {activeTech.category === 'backend' && 'Entorno de ejecución para JavaScript'}
              {activeTech.category === 'ai' && 'Lenguaje para inteligencia artificial'}
              {activeTech.category === 'mobile' && 'Framework para aplicaciones multiplataforma'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechMap;