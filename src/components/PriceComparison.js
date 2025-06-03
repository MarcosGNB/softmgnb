import React from 'react';

const PriceComparison = () => {
  const plans = [
    {
      type: 'Aplicación Web',
      price: '₲3.000.000 - ₲10.000.000',
      features: [
        'Diseño responsive',
        'Backend API',
        'Base de datos',
        'Panel administrativo',
        'Hosting por 1 año'
      ],
      image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc09q16p3T8xb3WM2EovYqBk0PZh6iezOHjnwfQ'
    },
    {
      type: 'App Móvil',
      price: '₲5.000.000 - ₲15.000.000',
      features: [
        'iOS y Android',
        'Notificaciones push',
        'Integración con APIs',
        'Panel de control',
        'Mantenimiento por 6 meses'
      ],
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      type: 'Solución con IA',
      price: '₲7.000.000 - ₲15.000.000',
      features: [
        'Modelos personalizados',
        'Procesamiento de datos',
        'Dashboard analítico',
        'API de predicción',
        'Soporte técnico prioritario'
      ],
      image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Nuestros Rangos de Precio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Soluciones personalizadas para cada necesidad
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.type}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.type}</h3>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{plan.price}</p>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transform hover:scale-105 transition-transform">
                  Consultar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;