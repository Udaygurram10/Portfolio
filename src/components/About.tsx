import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Rocket, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      icon: <Target className="w-8 h-8 text-coral" />,
      title: "Strategic Thinking",
      description: "Developing data-driven marketing strategies that deliver results",
    },
    {
      icon: <Rocket className="w-8 h-8 text-mint" />,
      title: "Growth Focus",
      description: "Driving business growth through innovative digital solutions",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-lavender" />,
      title: "Creative Solutions",
      description: "Crafting unique approaches to marketing challenges",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate digital marketer and e-commerce specialist with a proven track record
            of driving growth through innovative strategies and data-driven decision making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;