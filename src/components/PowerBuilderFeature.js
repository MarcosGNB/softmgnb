import React from 'react';

const PowerBuilderFeature = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
        <span className="text-indigo-600 dark:text-indigo-300 text-xl">{icon}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default PowerBuilderFeature;