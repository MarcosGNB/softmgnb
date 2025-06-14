import React from 'react';

const FormalizacionLegal = () => {
  const pasosLegales = [
    {
      paso: 1,
      titulo: "Elegir la estructura legal",
      descripcion: "Para startups tecnológicas en Paraguay recomendamos comenzar como Empresa Unipersonal (más simple y económico) o Sociedad de Responsabilidad Limitada (SRL) si tienes socios.",
      tiempo: "1-2 días",
      costo: "Unipersonal: ≈ ₲ 500.000 | SRL: ≈ ₲ 2.500.000"
    },
    {
      paso: 2,
      titulo: "Registro en la SET",
      descripcion: "Obtener tu RUC (Registro Único de Contribuyente) es obligatorio. Puedes hacerlo online en el portal de la SET.",
      tiempo: "1 día (online)",
      costo: "Gratuito",
      link: "https://www.set.gov.py"
    },
    {
      paso: 3,
      titulo: "Registro Mercantil",
      descripcion: "Inscripción en el Registro Público de Comercio para dar formalidad a tu empresa.",
      tiempo: "3-5 días hábiles",
      costo: "≈ ₲ 300.000 - 500.000"
    },
    {
      paso: 4,
      titulo: "Habilitación Municipal",
      descripcion: "Dependiendo de tu localidad (Asunción, CDE, etc.), necesitarás una habilitación comercial de la municipalidad.",
      tiempo: "7-10 días",
      costo: "Varía por municipio (desde ₲ 350.000)"
    },
    {
      paso: 5,
      titulo: "Asesoría Contable",
      descripcion: "Contratar un contador colegiado es esencial para manejar impuestos (IVA, IRP) y evitar multas.",
      tiempo: "Continuo",
      costo: "Desde ₲ 800.000/mes"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Sección Formalización Legal */}
      <div className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Guía Legal para Emprendedores
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Cómo Formalizar tu Empresa Tecnológica
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Pasos claros y prácticos para regularizar tu negocio en Paraguay
            </p>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-indigo-50 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">📌 Importante para Startups:</h3>
              <p className="text-gray-700">
                Como empresa emergente en tecnología, puedes comenzar de manera simplificada y escalar tu estructura legal conforme crezcas. 
                Lo esencial es empezar con RUC y contador, luego completar otros requisitos en los primeros 3 meses.
              </p>
            </div>

            <div className="space-y-8">
              {pasosLegales.map((paso) => (
                <div key={paso.paso} className="flex flex-col md:flex-row gap-6 p-5 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors duration-300">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-800 text-2xl font-bold">
                    {paso.paso}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">{paso.titulo}</h3>
                    <p className="mt-2 text-gray-700">{paso.descripcion}</p>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        ⏱️ Tiempo: {paso.tiempo}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        💰 Costo estimado: {paso.costo}
                      </span>
                      {paso.link && (
                        <a href={paso.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
                          🔗 Sitio oficial
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">¿Necesitas ayuda con los trámites?</h3>
              <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6">
                Como empresa nueva, entendemos los desafíos legales. Te recomendamos estos servicios accesibles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-medium text-indigo-700">Gestores Legales Económicos</h4>
                  <p className="text-sm text-gray-600 mt-1">Desde ₲ 1.500.000 todo incluido</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-medium text-indigo-700">Paquetes para Startups</h4>
                  <p className="text-sm text-gray-600 mt-1">Legal + contable desde ₲ 2.000.000/mes</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-medium text-indigo-700">Asesoría Gratuita</h4>
                  <p className="text-sm text-gray-600 mt-1">Programas gubernamentales de apoyo</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  📞 Contactar asesor legal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormalizacionLegal;