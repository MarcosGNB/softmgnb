import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contacto Directo</h2>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
            <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ubicación</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">Caacupé, Paraguay</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
            <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">mgnbsoftware@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
            <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Teléfono</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">(0992) 283-278</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Horario de Atención</h3>
        <p className="text-gray-600 dark:text-gray-300">Lunes a Viernes: 08:00 - 18:00</p>
        <p className="text-gray-600 dark:text-gray-300">Sábados: 08:00 - 12:00</p>
      </div>
    </div>
  );
};

export default ContactInfo;