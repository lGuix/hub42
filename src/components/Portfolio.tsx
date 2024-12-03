import React from 'react';

const projects = [
  {
    title: "Site E-commerce Responsive",
    category: "Web Design",
    description: "Design moderne et expérience utilisateur optimisée",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Identité Visuelle Startup",
    category: "Création Graphique",
    description: "Logo, cartes de visite et supports marketing",
    image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Retouche Photo Professionnelle",
    category: "Montage et Retouche",
    description: "Post-production et retouche créative",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Vues Aériennes Immobilier",
    category: "Prise de Vue par Drone",
    description: "Captation aérienne haute définition",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <h2 className="text-3xl font-bold text-customGray mb-2">Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de nos dernières réalisations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#4ECDC4]/20 backdrop-blur-sm rounded-full text-[#4ECDC4] text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl text-customGray font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}