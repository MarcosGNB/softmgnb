import React from 'react';

const MissionVision = () => {
  return (
    <div className="bg-white">
      {/* Sección Misión y Visión */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Nuestra Esencia
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Misión y Visión
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Misión */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Misión</h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  En Mgnb, nos dedicamos a desarrollar soluciones de software modernas, seguras y personalizadas para nuestros clientes. Nuestra misión es garantizar la máxima protección de los datos personales, creando productos innovadores y confiables que superen las expectativas. Ofrecemos diseños atractivos y funcionales a precios accesibles, siempre buscando la excelencia en cada proyecto.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Visión</h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Ser reconocidos como una empresa líder en el desarrollo de software, destacándonos por nuestra capacidad para crear soluciones tecnológicas avanzadas y seguras. Aspiramos a transformar la manera en que las empresas y personas interactúan con la tecnología, ofreciendo productos innovadores que marquen la diferencia en la industria, manteniendo siempre un enfoque en la calidad y la accesibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Nuestra Historia */}
              <div className="bg-slate-100 text-gray-800 py-20 rounded-t-3xl shadow-lg">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="lg:text-center">
              <h2 className="text-sm text-indigo-600 font-bold tracking-widest uppercase">
                Nuestra Historia
              </h2>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl transition duration-300">
                De una necesidad, nació una visión
              </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Todo comenzó con un joven desarrollador que, al colaborar con pequeños negocios y emprendedores,
                notó una gran necesidad: muchos tenían ideas brillantes, pero no contaban con herramientas tecnológicas para hacerlas realidad.
              </p>
              <p>
                Así nació <span className="text-indigo-600 font-semibold">MGNB</span>: no solo como una empresa de software,
                sino como una misión de ayudar a otros a crecer. Hoy seguimos impulsando el cambio,
                desarrollando tecnología accesible, moderna y segura para potenciar negocios y sueños.
              </p>
              <p>
                Porque cuando entendemos las necesidades de los demás, podemos construir soluciones que cambian vidas.
                Y eso es exactamente lo que hacemos.
              </p>
            </div>
          </div>
        </div>

    </div>
  );
};

export default MissionVision;
