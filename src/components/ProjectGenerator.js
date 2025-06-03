import React, { useState } from 'react';

const ProjectGenerator = () => {
  const [projectType, setProjectType] = useState('');
  const [result, setResult] = useState(null);

  const generateProject = () => {
    const recommendations = {
      web: {
        tech: ['React', 'Node.js', 'MongoDB'],
        timeline: '6-8 semanas',
        cost: '₲3.000.000 - ₲10.000.000',
        image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc09q16p3T8xb3WM2EovYqBk0PZh6iezOHjnwfQ'
      },
      mobile: {
        tech: ['Flutter', 'Firebase'],
        timeline: '8-12 semanas',
        cost: '₲5.000.000 - ₲15.000.000',
        image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
      },
      ai: {
        tech: ['Python', 'TensorFlow', 'FastAPI'],
        timeline: '12-16 semanas',
        cost: '₲7.000.000 - ₲20.000.000',
        image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
      }
    };

    setResult(recommendations[projectType] || {
      tech: ['Llámanos para una evaluación'],
      timeline: 'Variable',
      cost: 'Personalizado',
      image: ''
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
      <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Generador de Proyectos</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de Proyecto</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">Selecciona...</option>
            <option value="web">Aplicación Web</option>
            <option value="mobile">App Móvil</option>
            <option value="ai">Solución con IA</option>
          </select>
        </div>
        
        <button
          onClick={generateProject}
          disabled={!projectType}
          className={`w-full py-3 px-4 rounded-lg ${projectType ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400'} text-white font-medium transform hover:scale-105 transition-transform`}
        >
          Generar Recomendación
        </button>
        
        {result && (
          <div className="mt-6 space-y-3">
            {result.image && (
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={result.image} 
                  alt="Ejemplo de proyecto" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-xs">
              <h4 className="font-medium text-gray-900 dark:text-white">Tecnologías Recomendadas:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {result.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-xs">
              <h4 className="font-medium text-gray-900 dark:text-white">Timeline Estimado:</h4>
              <p className="mt-1">{result.timeline}</p>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-xs">
              <h4 className="font-medium text-gray-900 dark:text-white">Rango de Costo:</h4>
              <p className="mt-1 font-bold text-lg text-indigo-600 dark:text-indigo-400">{result.cost}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGenerator;