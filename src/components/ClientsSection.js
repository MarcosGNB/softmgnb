import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'FinanSys', logo: 'FS' },
    { name: 'HealthData', logo: 'HD' },
    { name: 'EduSoft', logo: 'ES' },
    { name: 'RetailPro', logo: 'RP' }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hemos trabajado con
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5">
          {clients.map((client, index) => (
            <div key={index} className="col-span-1 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-white shadow-md flex items-center justify-center">
                <span className="text-xl font-bold text-indigo-600">{client.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;