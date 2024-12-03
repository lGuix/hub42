import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[100vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-customGray mb-6">
            Web Design • Graphisme • Contenus digital
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#4ECDC4] to-[#A8E6CF] text-transparent bg-clip-text">
              Votre image, en ligne et au-delà !
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Transformez votre image avec des créations sur-mesure. Que ce soit pour un site web dynamique, 
            une identité visuelle unique, ou des contenus percutants, nous vous aidons à faire une impression durable.
          </p>
          <div className="flex justify-center">
          <motion.a
      href="#contact"
      className="inline-flex items-center px-8 py-4 rounded-full bg-[#4ECDC4] text-gray-900 font-medium text-lg"
      whileHover={{
        scale: 1.05,
        backgroundColor: "#A8E6CF",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      Discutons de votre projet !
      <motion.div
        className="ml-2 h-5 w-5"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowRight />
      </motion.div>
    </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}