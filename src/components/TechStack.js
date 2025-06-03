import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: 'D' },
    { name: 'Flutter', icon: '📱' },
    { name: 'PowerBuilder', icon: 'PB' },
    { name: 'Scrum', icon: '🔄' }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Nuestro Stack Tecnológico
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Tecnologías y metodologías para garantizar resultados excepcionales.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {technologies.map((tech, index) => (
              <div key={index} className="col-span-1 flex justify-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white dark:bg-gray-700 shadow-md">
                  <div className="text-center">
                    <div className="text-2xl font-bold dark:text-white">{tech.icon}</div>
                    <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{tech.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;