import React from 'react';

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="p-5 bg-white rounded-lg shadow">
        <div className="text-base text-gray-400">Proyectos activos</div>
        <div className="flex items-center pt-1">
          <div className="text-2xl font-bold text-gray-900">12</div>
          <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>2.5%</span>
          </span>
        </div>
      </div>
      
      <div className="p-5 bg-white rounded-lg shadow">
        <div className="text-base text-gray-400">Tareas completadas</div>
        <div className="flex items-center pt-1">
          <div className="text-2xl font-bold text-gray-900">87</div>
          <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>12%</span>
          </span>
        </div>
      </div>
      
      <div className="p-5 bg-white rounded-lg shadow">
        <div className="text-base text-gray-400">Clientes activos</div>
        <div className="flex items-center pt-1">
          <div className="text-2xl font-bold text-gray-900">24</div>
          <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>5.2%</span>
          </span>
        </div>
      </div>
      
      <div className="p-5 bg-white rounded-lg shadow">
        <div className="text-base text-gray-400">Ingresos</div>
        <div className="flex items-center pt-1">
          <div className="text-2xl font-bold text-gray-900">$42,580</div>
          <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>8.7%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;