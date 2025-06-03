import React from 'react';

const SifenIntegration = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Integración con SIFEN
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            Facturación electrónica validada oficialmente por la SET
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">¿Qué es el SIFEN?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                El Sistema Integrado Nacional de Facturación Electrónica (SIFEN) es la plataforma oficial de la SET para la validación, almacenamiento y consulta de Documentos Tributarios Electrónicos (DTE) en Paraguay.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Integración</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Emisión de facturas electrónicas con KUDE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Consulta en tiempo real de documentos en e-Kuatia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Generación de reportes para contabilidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Conexión segura con certificado digital</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <div className="relative pb-9/16">
              <img 
                src="https://www.set.gov.py/portal/PARAGUAY-SET/Informaciones%20Institucionales/sifen-implementacion-factura-electronica.jpg" 
                alt="Facturación electrónica SIFEN"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://www.set.gov.py/portal/PARAGUAY-SET/Informaciones%20Institucionales/sifen-implementacion-factura-electronica" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Más información sobre SIFEN
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Beneficios para tu negocio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <div className="text-indigo-600 dark:text-indigo-400 text-2xl mb-2">📄</div>
              <h4 className="font-medium text-gray-900 dark:text-white">Cumplimiento tributario</h4>
              <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">Cumple con todas las normativas de la SET evitando multas</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <div className="text-indigo-600 dark:text-indigo-400 text-2xl mb-2">⏱️</div>
              <h4 className="font-medium text-gray-900 dark:text-white">Procesos automáticos</h4>
              <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">Reduce tiempo en procesos administrativos</p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <div className="text-indigo-600 dark:text-indigo-400 text-2xl mb-2">💾</div>
              <h4 className="font-medium text-gray-900 dark:text-white">Backup legal</h4>
              <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">Tus documentos quedan respaldados en la nube de SIFEN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SifenIntegration;