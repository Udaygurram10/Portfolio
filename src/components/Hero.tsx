import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-coral/10 via-mint/10 to-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Uday Gurram</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8"
          >
            Innovating Marketing Strategies & Operations
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-coral to-mint text-white rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-coral text-coral rounded-full hover:bg-coral hover:text-white transition-colors duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-coral w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;