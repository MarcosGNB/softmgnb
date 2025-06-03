import React, { useState } from 'react';
import PowerBuilderFeature from './PowerBuilderFeature';

const PowerBuilderDemo = () => {
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    { icon: '💰', title: 'Control de Cajeros', description: 'Gestión completa de operaciones y movimientos de caja' },
    { icon: '📊', title: 'Cuenta Corriente', description: 'Seguimiento de saldos y movimientos de clientes' },
    { icon: '🧾', title: 'Facturación Electrónica', description: 'Emisión de comprobantes electrónicos con validación AFIP' },
    { icon: '📦', title: 'Control de Stock', description: 'Gestión de inventario con alertas de reposición' },
    { icon: '📈', title: 'Inversión Mensual', description: 'Desde ₲250.000/mes' },
    { icon: '🔄', title: 'Actualizaciones', description: 'Sistema siempre actualizado con las últimas normativas' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sistema de Ventas con Facturación
        </h2>
        <p className="mt-2 text-indigo-600 dark:text-indigo-400">Desarrollado en PowerBuilder</p>
      </div>

      <div className="flex border-b dark:border-gray-700">
        <button
          onClick={() => setActiveTab('features')}
          className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'features' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Funcionalidades
        </button>
        <button
          onClick={() => setActiveTab('demo')}
          className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'demo' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          Demo Interactivo
        </button>
      </div>

      <div className="p-6">
        {activeTab === 'features' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <PowerBuilderFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-gray-900 dark:text-white">Facturación</h3>
                <span className="text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded">
                  PowerBuilder 2019
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border dark:border-gray-600">
                <div className="grid grid-cols-12 gap-2 text-sm">
                  <div className="col-span-3 font-medium">Cliente:</div>
                  <div className="col-span-9">Juan Pérez (CUIL: 20-12345678-9)</div>
                  
                  <div className="col-span-3 font-medium">Producto:</div>
                  <div className="col-span-6">Laptop HP EliteBook</div>
                  <div className="col-span-3 text-right">₲9.250.000</div>
                  
                  <div className="col-span-3 font-medium">Cantidad:</div>
                  <div className="col-span-9">2</div>
                  
                  <div className="col-span-3 font-medium">Total:</div>
                  <div className="col-span-9 font-bold">₲18.500.000</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Plan Básico</h3>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border dark:border-gray-600">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">₲250.000</span>
                  <span className="text-gray-500 dark:text-gray-400">/mes</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">1 Cajero</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">Control de Stock</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">Facturación Electrónica</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">Soporte Técnico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 text-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium transform hover:scale-105 transition-transform">
          Solicitar Demo Completa
        </button>
      </div>
    </div>
  );
};

export default PowerBuilderDemo;