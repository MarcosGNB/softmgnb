import React from 'react';

const EstudioDeMercado = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Estudio de Mercado */}
      <div className="relative py-16 md:py-24">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-indigo-50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">
              Investigación
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl transform transition-all duration-500 hover:scale-105">
              Estudio de <span className="relative inline-block">
                <span className="relative z-10">Mercado</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 opacity-40 -z-0 transform translate-y-1"></span>
              </span>
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 transform transition-all duration-300 hover:shadow-md">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                Para comprender las necesidades reales de nuestros clientes y la competencia en el mercado,
                realizamos un estudio detallado que incluye:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Identificación de clientes potenciales: emprendedores, pymes y sector público.",
                  "Necesidades y expectativas sobre soluciones tecnológicas personalizadas.",
                  "Competidores principales y análisis comparativo de precios y servicios.",
                  "Oportunidades de diferenciación para MGNB en seguridad y accesibilidad."
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                        <svg className="h-3 w-3 text-indigo-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600 transform transition-all duration-300 hover:scale-[1.01]">
                <p className="text-indigo-700 font-medium md:text-lg italic">
                  "Este análisis nos permite diseñar productos que realmente aportan valor y se adaptan a las demandas del mercado."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstudioDeMercado;