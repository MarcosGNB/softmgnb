import React, { useState } from 'react';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí iría la lógica para enviar el correo
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
      <div className="max-w-lg mx-auto">
        <h3 className="text-2xl font-bold mb-3">🎁 Guía Gratuita</h3>
        <p className="mb-6">Descarga nuestra "Guía para saber si tu empresa necesita una app" totalmente gratis</p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="flex-grow px-4 py-3 rounded-md text-gray-900"
            />
            <button 
              type="submit"
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Descargar Guía
            </button>
          </form>
        ) : (
          <div className="bg-white text-indigo-600 p-4 rounded-md text-center">
            ✅ ¡Gracias! Revisa tu correo para descargar la guía.
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadMagnet;