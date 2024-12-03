import React from 'react';
import { Monitor, Palette, Video, Camera } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="h-12 w-12" />,
    title: "Web Design",
    description: "Création de sites web responsives et esthétiques, adaptés à l'image de votre marque."
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "Création Graphique",
    description: "Design d'identités visuelles et supports de communication percutants pour renforcer votre image."
  },
  {
    icon: <Video className="h-12 w-12" />,
    title: "Montage et Retouche Photo/vidéo",
    description: "Création de contenus visuels professionnels avec montage et retouche photo/vidéo."
  },
  {
    icon: <Camera className="h-12 w-12" />,
    title: "Prise de Vue par Drone",
    description: "Prises de vues aériennes de haute qualité pour des projets uniques et impactants."
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-10 back">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-customGray mb-2">Nos Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des solutions créatives complètes pour donner vie à vos projets digitaux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-800 hover:border-[#4ECDC4] transition-all duration-300 group hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-[#4ECDC4] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-customGray mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}