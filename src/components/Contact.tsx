import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-customGray mb-2">Prêt à donner vie à vos projets ?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Que ce soit pour la création de votre site internet ou la conception de vos supports graphiques en tout genre, je suis là pour vous accompagner à chaque étape. Discutons ensemble de vos besoins et construisons une image qui vous ressemble.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-[#4ECDC4] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-customGray">Email</h3>
                <p className="text-gray-400">contact@hub42.fr</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#4ECDC4] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-customGray">Téléphone</h3>
                <p className="text-gray-400">06 80 50 23 71</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-[#4ECDC4] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-customGray">Adresse</h3>
                <p className="text-gray-400">71490 Couches, France</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nom</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md backdrop-blur-md bg-gray-800/50 border-gray-700 text-customGray shadow-sm focus:border-[#4ECDC4] focus:ring-[#4ECDC4]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md backdrop-blur-md bg-gray-800/50 border-gray-700 text-customGray shadow-sm focus:border-[#4ECDC4] focus:ring-[#4ECDC4]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md backdrop-blur-md bg-gray-800/50 border-gray-700 text-customGray shadow-sm focus:border-[#4ECDC4] focus:ring-[#4ECDC4]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4ECDC4] to-[#A8E6CF] text-gray-900 py-3 px-6 rounded-lg font-medium hover:from-[#A8E6CF] hover:to-[#4ECDC4] transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}