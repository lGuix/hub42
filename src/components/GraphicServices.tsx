import React from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    category: "Identité Visuelle",
    items: [
      "Logo et charte graphique",
      "Cartes de visite",
      "Papeterie commerciale",
      "Guide de style"
    ]
  },
  {
    category: "Print",
    items: [
      "Flyers et brochures",
      "Affiches publicitaires",
      "Catalogues produits",
      "Packaging"
    ]
  },
  {
    category: "Digital",
    items: [
      "Bannières réseaux sociaux",
      "Posts Instagram/Facebook",
      "Signatures email",
      "Newsletters"
    ]
  },
  {
    category: "Marketing",
    items: [
      "Présentations PowerPoint",
      "Infographies",
      "Goodies personnalisés",
      "PLV"
    ]
  }
];

export function GraphicServices() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-customGray mb-2">Services Graphiques</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une gamme complète de services pour votre communication visuelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl p-6 bg-gray-800/50 backdrop-blur-md border border-gray-700"
            >
              <h3 className="text-xl font-bold text-[#4ECDC4] mb-4">{service.category}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#4ECDC4] mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-6">
            Chaque projet est unique. Contactez-nous pour un devis personnalisé adapté à vos besoins.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#4ECDC4] to-[#A8E6CF] text-gray-900 font-medium hover:from-[#A8E6CF] hover:to-[#4ECDC4] transition-all duration-300"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}