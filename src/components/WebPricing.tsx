import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Vitrine Essentielle",
    price: "À partir de 990€",
    features: [
      "Site One-Page responsive",
      "Design moderne et épuré",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Intégration réseaux sociaux",
      "Hébergement 1 an inclus"
    ]
  },
  {
    name: "Business Pro",
    price: "À partir de 1990€",
    features: [
      "Jusqu'à 5 pages personnalisées",
      "Design premium responsive",
      "SEO avancé",
      "Blog intégré",
      "Système de réservation",
      "Analytics et rapports",
      "Formation administration",
      "Hébergement 1 an inclus"
    ]
  },
  {
    name: "E-commerce Premium",
    price: "À partir de 2990€",
    features: [
      "Boutique en ligne complète",
      "Design personnalisé responsive",
      "Jusqu'à 100 produits",
      "Système de paiement sécurisé",
      "Gestion des stocks",
      "SEO e-commerce",
      "Formation complète",
      "Support premium 6 mois",
      "Hébergement 1 an inclus"
    ]
  }
];

export function WebPricing() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <h2 className="text-3xl font-bold text-customGray mb-2">Offres Web Design</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins et votre budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-xl p-8 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 flex flex-col opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-customGray mb-4">{plan.name}</h3>
              <p className="text-xl text-[#4ECDC4] font-semibold mb-6">{plan.price}</p>
              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#4ECDC4] mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 block text-center py-3 px-6 rounded-lg transition-all duration-300 border border-[#4ECDC4] text-customGray hover:bg-[#4ECDC4] hover:text-gray-900 transform hover:translate-y-[-2px]"
              >
                Choisir cette offre
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}