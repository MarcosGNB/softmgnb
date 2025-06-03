import React, { useState } from 'react';

const PortfolioItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 ${isHovered ? 'transform -translate-y-2 shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : ''}`}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="text-white">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm mb-2">{project.client}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-indigo-600/80 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
        
        <div className="space-y-2">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">✓</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;