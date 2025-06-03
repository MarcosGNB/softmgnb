import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Sistema de E-commerce',
      client: 'TiendaOnline',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['React', 'Node.js', 'Stripe'],
      description: 'Plataforma para venta de productos en línea con pasarela de pagos.',
      features: [
        'Catálogo dinámico con búsqueda inteligente',
        'Carrito de compras persistente',
        'Integración con APIs de logística'
      ]
    },
    // --- Proyectos PowerBuilder con PostgreSQL ---
    {
      title: 'ERP para Manufactura',
      client: 'IndustrialCorp',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['PowerBuilder', 'PostgreSQL', 'DataWindows'],
      description: 'Sistema de planificación de recursos para la industria manufacturera.',
      features: [
        'Módulos de producción y cadena de suministro',
        'Reportes con DataWindows conectados a PostgreSQL',
        'Migración desde sistema legacy (Access)'
      ]
    },
    {
      title: 'CRM Corporativo',
      client: 'Ventas Nacionales',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['PowerBuilder', 'PostgreSQL', 'PowerScript'],
      description: 'Gestión de clientes y pipeline de ventas con análisis predictivo.',
      features: [
        'Integración directa con PostgreSQL vía ODBC',
        'Dashboards con DataWindow Charts',
        'Exportación de datos a CSV/Excel'
      ]
    },
    {
      title: 'Sistema de Nómina',
      client: 'RH Consultores',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['PowerBuilder', 'PostgreSQL', 'Crystal Reports'],
      description: 'Cálculo automatizado de nóminas con compliance fiscal.',
      features: [
        'Procesamiento batch de liquidaciones',
        'Almacenamiento seguro en PostgreSQL',
        'Generación de archivos para bancos'
      ]
    },
    // --- Otros proyectos (no PowerBuilder) ---
    {
      title: 'App de Salud Móvil',
      client: 'Clínica SaludPlus',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['Flutter', 'Firebase'],
      description: 'Monitoreo de pacientes crónicos con recordatorios de medicación.',
      features: [
        'Notificaciones push',
        'Sincronización offline'
      ]
    },
    {
      title: 'Plataforma Educativa',
      client: 'EduTech',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['React', 'Django', 'PostgreSQL'],
      description: 'Aula virtual con cursos interactivos y gamificación.',
      features: [
        'Video streaming',
        'Evaluaciones automatizadas'
      ]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Portafolio de Proyectos
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Soluciones con enfoque en PostgreSQL y PowerBuilder
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;