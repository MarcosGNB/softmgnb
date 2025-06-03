import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">¿Listo para transformar tu negocio?</span>
          <span className="block text-indigo-200 mt-2">Desde ₲250.000/mes</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Soluciones personalizadas que se adaptan a tu presupuesto.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-transform"
            >
              Cotiza tu Proyecto
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 transform hover:scale-105 transition-transform"
            >
              Ver Planes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

// DONE