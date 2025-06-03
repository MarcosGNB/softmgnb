import React from 'react';

const RecentProjects = () => {
  return (
    <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Proyectos recientes</h3>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600">M</span>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Marketplace App</div>
                <div className="text-sm text-gray-500">Desarrollo Frontend</div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Activo
              </span>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600">A</span>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">API Gateway</div>
                <div className="text-sm text-gray-500">Arquitectura Backend</div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                En revisión
              </span>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600">D</span>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Dashboard Analytics</div>
                <div className="text-sm text-gray-500">Visualización de datos</div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Activo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;