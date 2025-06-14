import React from 'react';

const revenueItems = [
  {
    title: 'Ingresos por Suscripciones',
    description:
      'Cobro recurrente por acceso continuo al software y sus actualizaciones, típico del modelo SaaS (Software as a Service).',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
    ),
  },
  {
    title: 'Venta de Licencias',
    description:
      'Venta de derechos para usar el software de manera temporal o permanente, generando ingresos inmediatos.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H9l-4 4v10a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Servicios de Consultoría y Desarrollo a Medida',
    description:
      'Personalización de software, desarrollo a medida o asesoría técnica especializada para los clientes.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 010 8m-8 4a4 4 0 100-8m8 0v-4m-8 4v-4m8 0H8" />
    ),
  },
  {
    title: 'Publicidad y Monetización de Datos',
    description:
      'Generación de ingresos a través de publicidad o uso ético de datos agregados y anonimizados.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17a4 4 0 01-4-4V5a4 4 0 018 0v8a4 4 0 01-4 4z" />
    ),
  },
  {
    title: 'Soporte y Mantenimiento',
    description:
      'Ingresos por brindar soporte técnico y mantenimiento continuo a los clientes, además del software.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
    ),
  },
  {
    title: 'Ingresos Complementarios',
    description:
      'Cursos, capacitaciones, seminarios y venta de productos o servicios complementarios.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
    ),
  },
  {
    title: 'Ventas de Activos',
    description:
      'Generación de ingresos mediante la venta de hardware, licencias o activos no utilizados.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1" />
    ),
  },
  {
    title: 'Ingresos por Franquicias',
    description:
      'Licenciamiento del modelo de negocio MGNB a terceros para operar bajo la misma marca y estándar.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m4-4h2m-16 0h2m2.293-5.707l1.414-1.414m8.586 8.586l1.414-1.414m0-8.586l-1.414-1.414m-8.586 8.586l-1.414-1.414" />
    ),
  },
];

const RevenueSources = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-sm text-indigo-600 font-bold tracking-widest uppercase">Modelo de Negocio</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
             Fuentes de Ingreso de MGNB
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {revenueItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-500 p-3 rounded-md text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueSources;
