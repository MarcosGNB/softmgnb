import React, { useState } from 'react';

const AIChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // 👈 Chat abierto o cerrado

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const res = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiMsg = { text: data.response, sender: 'ai' };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      const aiMsg = {
        text: '⚠️ Error al contactar con el asistente.',
        sender: 'ai',
      };
      setMessages((prev) => [...prev, aiMsg]);
      console.error('Error en fetch:', error);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50">

      {/* Botón flotante para abrir/cerrar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700"
      >
        {isOpen ? '✖️' : '💬'}
      </button>

      {/* Panel del chat */}
      {isOpen && (
        <div className="mt-2 w-[90vw] max-w-sm bg-white shadow-xl rounded-lg flex flex-col overflow-hidden">
          <div className="bg-indigo-600 text-white p-3">
            <h3 className="font-bold">Asistente MGNB_</h3>
          </div>

          <div className="h-64 overflow-y-auto p-3 bg-gray-50 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === 'user' ? 'bg-indigo-100' : 'bg-gray-200'
                  }`}
                >
                  {msg.sender === 'ai' ? (
                    <pre className="whitespace-pre-wrap font-mono text-sm">{msg.text}</pre>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t">
            <div className="flex">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregunta sobre desarrollo..."
                rows={1}
                className="flex-1 border rounded-l-lg p-2 text-sm resize-none overflow-hidden"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button
                onClick={handleSend}
                className="bg-indigo-600 text-white px-3 rounded-r-lg hover:bg-indigo-700"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBot;
