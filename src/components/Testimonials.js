import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MGNB_ desarrolló nuestra plataforma de e-commerce en tiempo récord y con una calidad excepcional.",
      author: "Carlos Méndez",
      company: "TiendaOnline",
      avatar: "CM"
    },
    {
      quote: "El equipo de MGNB_ entendió perfectamente nuestras necesidades y entregó una solución que superó nuestras expectativas.",
      author: "Ana Rodríguez",
      company: "Fintech Solutions",
      avatar: "AR"
    },
    {
      quote: "Trabajar con MGNB_ fue una experiencia profesional desde el primer día. Su enfoque en la seguridad fue clave para nosotros.",
      author: "Luis Torres",
      company: "HealthData",
      avatar: "LT"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-medium">{testimonial.avatar}</span>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-600">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;