import React from 'react';

const MarketingYVentas = () => {
  const estrategias = [
    {
      titulo: "Marketing Digital Avanzado",
      icono: "📈",
      puntos: [
        "Campañas SEM/SEO con enfoque en palabras clave de alto valor",
        "Automatización de marketing con nurturación de leads",
        "Remarketing estratégico para conversión de visitantes",
        "Inbound marketing con funnel optimizado"
      ],
      metricas: "ROI promedio: 5:1 | CTR 35% superior al mercado"
    },
    {
      titulo: "Generación de Contenido Premium",
      icono: "🎯",
      puntos: [
        "Webinars mensuales con expertos del sector",
        "Blog técnico con +15 artículos/mes (90% originales)",
        "E-books y guías descargables para generación de leads",
        "Caso de estudio por cada 10 proyectos completados"
      ],
      metricas: "Tasa de conversión contenido: 8.2% | 45% MQL generados"
    },
    {
      titulo: "Alianzas Estratégicas",
      icono: "🤝",
      puntos: [
        "Acuerdos con 5 incubadoras líderes en LATAM",
        "Programa de referidos con incentivos escalables",
        "Co-marketing con proveedores tecnológicos",
        "Participación en 3 eventos anuales como sponsor platinum"
      ],
      metricas: "20% de clientes provenientes de alianzas"
    },
    {
      titulo: "Programas de Fidelización",
      icono: "💎",
      puntos: [
        "Descuentos por volumen (hasta 25% para clientes recurrentes)",
        "Programa VIP con soporte prioritario y beneficios exclusivos",
        "Sesiones estratégicas trimestrales sin costo",
        "Actualizaciones gratuitas por 12 meses"
      ],
      metricas: "Retención clientes: 92% | CLV 3.5x promedio mercado"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Marketing y Ventas */}
      <div className="relative py-16 md:py-24">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-indigo-50 to-transparent opacity-60"></div>
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in">
              Crecimiento Exponencial
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl transform transition-all duration-500 hover:scale-105">
              <span className="relative inline-block">
                <span className="relative z-10">Estrategias de Marketing</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 opacity-40 -z-0 transform translate-y-1"></span>
              </span> y Ventas
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed mb-12 px-4">
              Implementamos un ecosistema de crecimiento integrado que combina lo mejor del marketing digital
              con relaciones comerciales estratégicas, generando un <span className="font-semibold text-indigo-700">pipeline constante de oportunidades</span> y 
              una <span className="font-semibold text-indigo-700">tasa de conversión 40% superior</span> al promedio del sector.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {estrategias.map((estrategia, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                  <div className="flex items-start mb-4">
                    <span className="text-3xl mr-4 mt-1">{estrategia.icono}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{estrategia.titulo}</h3>
                      <p className="text-sm text-indigo-600 font-medium mt-1">{estrategia.metricas}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-14">
                    {estrategia.puntos.map((punto, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-5 w-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                            <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-3 text-gray-700">{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nuestro Diferencial Competitivo</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Combinamos <span className="font-semibold text-indigo-700">análisis predictivo</span> con <span className="font-semibold text-indigo-700">inteligencia artificial</span> para optimizar 
                  nuestras campañas en tiempo real, logrando un <span className="font-semibold text-indigo-700">CAC 30% menor</span> que nuestros competidores 
                  directos mientras mantenemos los más altos estándares de calidad.
                </p>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 transform hover:scale-105">
                  <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Solicitar Propuesta Comercial
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingYVentas;