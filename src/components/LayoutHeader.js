import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">MGNB_</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-100">Dashboard</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Proyectos</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Equipo</a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Configuración</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;