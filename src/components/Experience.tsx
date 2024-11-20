import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Growth Marketing Strategist',
      company: 'Totely India',
      period: '2022 - Present',
      description: 'Leading digital marketing initiatives and growth strategies.',
    },
    {
      title: 'Digital Marketing Manager & Web Developer',
      company: 'Freelance',
      period: '2020 - 2022',
      description: 'Managed multiple client projects and web development initiatives.',
    },
    {
      title: 'Marketing & Backend Operations',
      company: 'Garden Up',
      period: '2019 - 2020',
      description: 'Handled marketing operations and backend systems.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through my professional growth and achievements
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                <div className={`bg-white p-6 rounded-xl shadow-lg relative ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="absolute top-6 -right-4 md:hidden w-8 h-8 bg-coral rounded-full flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-coral font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
              <div className={`hidden md:block ${
                index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;