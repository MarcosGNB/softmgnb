import React from 'react';

const AnalisisFODA = () => {
  const fodaItems = [
    {
      category: 'Fortalezas',
      color: 'green',
      items: [
        'Innovación constante en desarrollo',
        'Altos estándares de seguridad',
        'Calidad y precios accesibles'
      ]
    },
    {
      category: 'Oportunidades',
      color: 'blue',
      items: [
        'Demanda creciente de software seguro',
        'Mercados digitales en expansión',
        'Posibilidad de alianzas estratégicas'
      ]
    },
    {
      category: 'Debilidades',
      color: 'amber',
      items: [
        'Recursos limitados para marketing',
        'Equipo pequeño en inicio'
      ]
    },
    {
      category: 'Amenazas',
      color: 'red',
      items: [
        'Competencia establecida',
        'Cambios rápidos en tecnología'
      ]
    }
  ];

  const colorMap = {
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700',
      hover: 'hover:bg-green-100',
      icon: 'text-green-500'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      hover: 'hover:bg-blue-100',
      icon: 'text-blue-500'
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      hover: 'hover:bg-amber-100',
      icon: 'text-amber-500'
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-700',
      hover: 'hover:bg-red-100',
      icon: 'text-red-500'
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Análisis FODA */}
      <div className="relative py-16 md:py-24">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-indigo-50 to-transparent opacity-60"></div>
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">
              Estrategia
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl transform transition-all duration-500 hover:scale-105">
              Análisis <span className="relative inline-block">
                <span className="relative z-10">FODA</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 opacity-40 -z-0 transform translate-y-1"></span>
              </span>
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fodaItems.map((item, index) => (
                <div 
                  key={index}
                  className={`${colorMap[item.color].bg} ${colorMap[item.color].border} ${colorMap[item.color].hover} p-6 rounded-xl border-l-4 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${colorMap[item.color].icon} mr-3`}>
                      {item.color === 'green' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {item.color === 'blue' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {item.color === 'amber' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      )}
                      {item.color === 'red' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <h3 className={`${colorMap[item.color].text} text-xl font-semibold`}>{item.category}</h3>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {item.items.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`h-5 w-5 rounded-full ${colorMap[item.color].bg} border ${colorMap[item.color].border} flex items-center justify-center`}>
                            <svg className="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-3 text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
                <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Descargar análisis completo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalisisFODA;