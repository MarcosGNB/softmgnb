import React from 'react';

const ObjectivesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Nuestro Rumbo
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Objetivos Generales y Específicos
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Objetivo General */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Objetivo General</h3>
              </div>
            </div>
            <div className="mt-4 text-gray-600 text-base">
              Desarrollar soluciones de software modernas, seguras y personalizadas que impulsen el crecimiento de nuestros clientes,
              garantizando la protección de datos y la excelencia en cada proyecto.
            </div>
          </div>

          {/* Objetivos Específicos */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M4 6h16" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Objetivos Específicos</h3>
              </div>
            </div>
            <ul className="mt-4 text-gray-600 text-base list-disc list-inside space-y-2">
              <li>Diseñar plataformas tecnológicas accesibles y funcionales para emprendedores y empresas.</li>
              <li>Implementar altos estándares de seguridad en todos los desarrollos.</li>
              <li>Ofrecer productos innovadores que se adapten a las necesidades específicas de cada cliente.</li>
              <li>Garantizar una experiencia de usuario atractiva mediante interfaces intuitivas y modernas.</li>
              <li>Mantener precios competitivos sin comprometer la calidad del producto final.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
