import React from 'react';

const EstrategiaEscalabilidad = () => {
  const estrategias = [
    {
      titulo: "Tecnología y Producto",
      icono: "🚀",
      puntos: [
        "Roadmap de desarrollo a 3 años con actualizaciones trimestrales",
        "Inversión del 25% de ingresos en I+D",
        "Adopción progresiva de IA y machine learning",
        "Sistema modular para personalización avanzada"
      ],
      metricas: "+3 productos nuevos por año | 90% retención funcionalidades"
    },
    {
      titulo: "Expansión Geográfica",
      icono: "🌎",
      puntos: [
        "Fase 1: Consolidación en Paraguay (Año 1)",
        "Fase 2: Mercados vecinos (Argentina, Chile, Uruguay - Año 2)",
        "Fase 3: Latinoamérica completa (Año 3)",
        "Adaptación local con partners regionales"
      ],
      metricas: "Cobertura 5 países en 36 meses | 80% adaptación cultural"
    },
    {
      titulo: "Operaciones y Eficiencia",
      icono: "⚙️",
      puntos: [
        "Automatización del 60% de procesos internos",
        "Migración completa a arquitectura serverless",
        "Sistema de gestión de proyectos unificado",
        "Formación continua del equipo en nuevas tecnologías"
      ],
      metricas: "40% reducción costos operativos | 3x capacidad productiva"
    },
    {
      titulo: "Crecimiento Organizacional",
      icono: "📈",
      puntos: [
        "Programa de atracción de talento senior",
        "Ronda de inversión Serie A en 18 meses",
        "Alianzas con 3 universidades para captar jóvenes talentos",
        "Modelo de franquicias digitales para expansión"
      ],
      metricas: "Equipo de 50+ en 2 años | 5M ARR para Serie A"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Estrategia de Escalabilidad */}
      <div className="relative py-16 md:py-24">
        {/* Elementos decorativos animados */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-indigo-50 to-transparent opacity-60"></div>
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">
              Visión de Crecimiento
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl transform transition-all duration-500 hover:scale-105">
              Estrategia de <span className="relative inline-block">
                <span className="relative z-10">Escalabilidad</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 opacity-40 -z-0 transform translate-y-1"></span>
              </span>
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed mb-12 px-4">
              Nuestro plan de escalamiento está diseñado para crecer de manera sostenible, manteniendo la calidad y 
              la esencia de nuestra startup mientras alcanzamos nuevos mercados y capacidades.
            </p>
            
            {/* Timeline interactivo */}
            <div className="relative">
              {/* Línea de tiempo */}
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-indigo-100 transform -translate-x-1/2"></div>
              
              {estrategias.map((estrategia, index) => (
                <div 
                  key={index} 
                  className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Punto en timeline */}
                  <div className="hidden md:flex absolute left-1/2 w-6 h-6 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* Tarjeta de estrategia */}
                  <div 
                    className={`w-full md:w-5/12 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2 ${index % 2 === 0 ? 'md:mr-auto md:ml-6' : 'md:ml-auto md:mr-6'}`}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{estrategia.icono}</span>
                      <h3 className="text-xl font-bold text-gray-900">{estrategia.titulo}</h3>
                    </div>
                    <ul className="space-y-3 pl-14">
                      {estrategia.puntos.map((punto, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full bg-indigo-50 flex items-center justify-center">
                              <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <span className="ml-3 text-gray-700">{punto}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">{estrategia.metricas}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sección de inversores */}
            <div className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Oportunidad para Inversionistas</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Estamos preparando nuestra ronda de inversión inicial con un plan claro de escalabilidad y retorno. 
                  Proyectamos un crecimiento de 5x en 3 años con márgenes EBITDA positivos a partir del año 2.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-indigo-700">Ticket mínimo</h4>
                    <p className="text-gray-600">USD 25,000</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-indigo-700">Valuación pre-money</h4>
                    <p className="text-gray-600">USD 2.5M</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-indigo-700">ROI esperado</h4>
                    <p className="text-gray-600">4.8x en 5 años</p>
                  </div>
                </div>
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 transform hover:scale-105">
                  <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Conocer términos de inversión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstrategiaEscalabilidad;