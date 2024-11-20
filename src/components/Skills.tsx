import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Mail, Search, ShoppingCart, BarChart, Code } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: <LineChart className="w-8 h-8" />, name: 'A/B Testing', description: 'Conversion optimization through data-driven testing' },
    { icon: <Search className="w-8 h-8" />, name: 'SEO', description: 'Search engine optimization and ranking strategies' },
    { icon: <BarChart className="w-8 h-8" />, name: 'Google Ads', description: 'PPC campaign management and optimization' },
    { icon: <LineChart className="w-8 h-8" />, name: 'Analytics', description: 'Data analysis and performance tracking' },
    { icon: <Mail className="w-8 h-8" />, name: 'Mailchimp', description: 'Email marketing and automation' },
    { icon: <ShoppingCart className="w-8 h-8" />, name: 'Shopify', description: 'E-commerce platform development' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging modern tools and technologies to drive marketing success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-coral/10 to-mint/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;