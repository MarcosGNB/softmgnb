import React from 'react';

const PlanFinanciero = () => {
  const metricasFinancieras = [
    {
      titulo: "Inversión Inicial",
      valor: "USD 25,000",
      detalle: "Para desarrollo MVP, equipos y operaciones iniciales",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tendencia: "positive"
    },
    {
      titulo: "Punto de Equilibrio",
      valor: "Mes 14",
      detalle: "Proyección basada en crecimiento orgánico",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      tendencia: "neutral"
    },
    {
      titulo: "ROI Esperado",
      valor: "3.2x",
      detalle: "Retorno a 3 años considerando escalamiento",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      tendencia: "positive"
    }
  ];

  const proyecciones = [
    {
      año: "Año 1",
      ingresos: "USD 120,000",
      costos: "USD 95,000",
      crecimiento: "25%"
    },
    {
      año: "Año 2",
      ingresos: "USD 250,000",
      costos: "USD 150,000",
      crecimiento: "108%"
    },
    {
      año: "Año 3",
      ingresos: "USD 450,000",
      costos: "USD 200,000",
      crecimiento: "80%"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Plan Financiero */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Viabilidad Económica
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Plan Financiero <span className="text-indigo-600">Transparente</span>
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-indigo-50 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">📊 Nuestro Enfoque Financiero:</h3>
              <p className="text-gray-700">
                Como startup tecnológica, priorizamos eficiencia operativa y crecimiento sostenible. 
                Nuestro modelo combina suscripciones SaaS, desarrollo personalizado y consultoría especializada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {metricasFinancieras.map((metrica, index) => (
                <div 
                  key={index}
                  className={`bg-white p-6 rounded-xl border ${metrica.tendencia === 'positive' ? 'border-green-200' : 'border-gray-200'} shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${metrica.tendencia === 'positive' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'} mr-4`}>
                      {metrica.icono}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{metrica.titulo}</h3>
                  </div>
                  <p className="text-2xl font-bold mb-2">{metrica.valor}</p>
                  <p className="text-gray-600 text-sm">{metrica.detalle}</p>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Proyección Financiera (Primeros 3 Años)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Año</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ingresos</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Costos</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crecimiento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {proyecciones.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.año}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">{item.ingresos}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-red-600">{item.costos}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {item.crecimiento}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Principales Fuentes de Ingreso</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-1">•</div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Licencias SaaS</p>
                      <p className="text-gray-600 text-sm">Suscripciones mensuales/anuales para nuestras plataformas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-1">•</div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Desarrollo Personalizado</p>
                      <p className="text-gray-600 text-sm">Soluciones a medida para clientes empresariales</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-1">•</div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Consultoría Tecnológica</p>
                      <p className="text-gray-600 text-sm">Asesoramiento especializado en transformación digital</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Estructura de Costos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-red-500 mt-1">•</div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Desarrollo e Innovación</p>
                      <p className="text-gray-600 text-sm">60% de nuestro presupuesto en I+D</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-red-500 mt-1">•</div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Talento Especializado</p>
                      <p className="text-gray-600 text-sm">25% en equipo técnico y comercial</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-red-500 mt-1">•</div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium">Infraestructura Cloud</p>
                      <p className="text-gray-600 text-sm">15% en servidores y servicios tercerizados</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">¿Interesado en conocer más detalles?</h3>
              <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
                Como startup transparente, compartimos nuestro plan financiero completo con inversionistas y socios estratégicos.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
                <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Solicitar documento completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanFinanciero;