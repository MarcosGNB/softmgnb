import React from 'react';

const EquipoTrabajo = () => {
  const miembrosEquipo = [
    {
      rol: "Desarrollo Frontend",
      descripcion: "Especialistas en React, Next.js y Tailwind CSS que transforman diseños en experiencias digitales fluidas",
      habilidades: ["TypeScript", "Responsive Design", "Performance Optimization"],
      icono: "💻"
    },
    {
      rol: "Desarrollo Backend",
      descripcion: "Expertos en arquitecturas escalables con Node.js y bases de datos seguras",
      habilidades: ["API REST", "Microservicios", "Autenticación JWT"],
      icono: "⚙️"
    },
    {
      rol: "Diseño UX/UI",
      descripcion: "Creativos que combinan usabilidad y estética para interfaces intuitivas",
      habilidades: ["Figma", "User Research", "Prototipado"],
      icono: "🎨"
    },
    {
      rol: "Seguridad Informática",
      descripcion: "Guardianes de tus datos implementando las últimas medidas de protección",
      habilidades: ["Pentesting", "OWASP", "Ciberseguridad"],
      icono: "🔒"
    },
    {
      rol: "Consultoría de Negocios",
      descripcion: "Analistas que optimizan procesos y maximizan tu ROI tecnológico",
      habilidades: ["Business Intelligence", "KPIs", "Transformación Digital"],
      icono: "📊"
    },
    {
      rol: "Soporte y Ventas",
      descripcion: "Equipo cercano que entiende tus necesidades y ofrece soluciones reales",
      habilidades: ["Customer Success", "Onboarding", "Soporte 24/7"],
      icono: "🤝"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Equipo de Trabajo */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Nuestro Valor Humano
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Conoce al <span className="text-indigo-600">Equipo</span> Detrás del Código
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed mb-12 px-4">
              Somos un equipo apasionado por la tecnología, combinando diversidad de talentos para ofrecerte
              soluciones integrales. Cada miembro aporta experiencia única pero compartimos un mismo compromiso:
              tu éxito digital.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {miembrosEquipo.map((miembro, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{miembro.icono}</span>
                    <h3 className="text-xl font-bold text-gray-900">{miembro.rol}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow">{miembro.descripcion}</p>
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Habilidades clave</h4>
                    <div className="flex flex-wrap gap-2">
                      {miembro.habilidades.map((habilidad, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                          {habilidad}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">¿Quieres unirte a nuestro equipo?</h3>
              <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
                Como startup en crecimiento, siempre estamos buscando talento apasionado por innovar.
                Envíanos tu CV aunque no veas vacantes públicas.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
                <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Enviar solicitud
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipoTrabajo;