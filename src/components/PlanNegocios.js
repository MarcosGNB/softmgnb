import React from 'react';

const PlanNegocios = () => {
  const planItems = [
    {
      title: "Resumen ejecutivo",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: "Visión general concisa de nuestro modelo de negocio y objetivos estratégicos."
    },
    {
      title: "Descripción del negocio y mercado",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Análisis detallado de nuestro posicionamiento y el mercado objetivo."
    },
    {
      title: "Análisis FODA y plan financiero",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Evaluación estratégica y proyecciones económicas detalladas."
    },
    {
      title: "Estrategias de marketing y operación",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Planes tácticos para posicionamiento y operaciones eficientes."
    },
    {
      title: "Proyecciones de crecimiento y rentabilidad",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      description: "Estimaciones financieras y roadmap de crecimiento a 3-5 años."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Plan de Negocios */}
      <div className="relative py-16 md:py-24">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-indigo-50 to-transparent opacity-60"></div>
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">
              Planeación
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl transform transition-all duration-500 hover:scale-105">
              Plan de <span className="relative inline-block">
                <span className="relative z-10">Negocios</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 opacity-40 -z-0 transform translate-y-1"></span>
              </span>
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed mb-12 px-4">
              Contamos con un plan de negocios estructurado y detallado que sirve como hoja de ruta
              para el crecimiento sostenible de nuestra empresa, asegurando rentabilidad y escalabilidad.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-14">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 transform hover:scale-105">
                <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Solicitar plan completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanNegocios;