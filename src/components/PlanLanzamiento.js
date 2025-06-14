import React from 'react';

const PlanLanzamiento = () => {
  const fasesLanzamiento = [
    {
      fase: "Pre-Lanzamiento (Mes 1-2)",
      actividades: [
        "Desarrollo de identidad de marca completa (logo, colores, tono)",
        "Creación de página web con landing page conversiva",
        "Construcción de redes sociales profesionales",
        "Desarrollo de contenido inicial (blog, casos de uso)"
      ],
      objetivo: "Generar expectativa y lista de correos interesados"
    },
    {
      fase: "Lanzamiento Beta (Mes 3)",
      actividades: [
        "Programa de beta testers con 20-30 empresas seleccionadas",
        "Campañas segmentadas en LinkedIn para B2B",
        "Primer webinar demostrativo con registro previo",
        "Ofertas especiales para early adopters (30% descuento)"
      ],
      objetivo: "Validar producto con usuarios reales y generar testimonios"
    },
    {
      fase: "Lanzamiento Oficial (Mes 4)",
      actividades: [
        "Evento virtual de lanzamiento con invitados especiales",
        "Campaña integrada (redes + Google Ads + email marketing)",
        "Programa de referidos con beneficios para ambos lados",
        "Alianzas con incubadoras para difusión"
      ],
      objetivo: "Maximizar alcance y adquirir primeros 100 clientes pagos"
    },
    {
      fase: "Consolidación (Mes 5-6)",
      actividades: [
        "Publicación de casos de éxito iniciales",
        "Optimización continua basada en feedback",
        "Expansión a nuevos canales (YouTube, podcast)",
        "Programa de fidelización para clientes iniciales"
      ],
      objetivo: "Retener clientes y establecer flujo constante de leads"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Plan de Lanzamiento */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Roadmap Estratégico
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Plan de Lanzamiento <span className="text-indigo-600">Paso a Paso</span>
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-indigo-50 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">🚀 Nuestra Filosofía de Lanzamiento:</h3>
              <p className="text-gray-700">
                Como startup tecnológica, adoptamos un enfoque escalable: comenzamos pequeño, validamos rápido y escalamos inteligentemente. 
                Cada fase está diseñada para minimizar riesgo y maximizar aprendizaje.
              </p>
            </div>

            <div className="space-y-10">
              {fasesLanzamiento.map((fase, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="hidden md:block ml-4 h-full border-l-2 border-gray-300"></div>
                  </div>
                  <div className="flex-grow bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{fase.fase}</h3>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Objetivo Principal:</h4>
                    <p className="text-gray-700 mb-4">{fase.objetivo}</p>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Acciones Clave:</h4>
                    <ul className="space-y-2">
                      {fase.actividades.map((actividad, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full bg-indigo-50 flex items-center justify-center">
                              <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <span className="ml-3 text-gray-700">{actividad}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">¿Quieres ser parte de nuestro lanzamiento?</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Estamos buscando empresas visionarias para nuestro programa beta. Obtén acceso prioritario, descuentos especiales y 
                  la oportunidad de dar forma a nuestro producto.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                    <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Unirme al programa beta
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
                    <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Agendar demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanLanzamiento;