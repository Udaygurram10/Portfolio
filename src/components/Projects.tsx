import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, MessageSquare, Box, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 'shipment-visibility',
      title: 'Shipment Visibility Campaign',
      description: 'Led a campaign that increased customer engagement by 60% through improved shipment tracking visibility.',
      icon: <Box />,
      metrics: '+60% engagement',
      tags: ['Analytics', 'UX Design', 'Customer Experience'],
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'whatsapp-integration',
      title: 'WhatsApp API Integration',
      description: 'Implemented WhatsApp business API for customer service, resulting in 30% higher engagement rates.',
      icon: <MessageSquare />,
      metrics: '+30% engagement',
      tags: ['API Integration', 'Customer Service', 'Automation'],
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Developed and launched a no-code e-commerce platform using Wix/Shopify, optimizing for conversions.',
      icon: <Globe />,
      metrics: 'No-code solution',
      tags: ['E-commerce', 'Shopify', 'Conversion Optimization'],
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful marketing initiatives and their impact
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <Link to={`/project/${project.id}`}>
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <div className="flex items-center text-white/90 font-medium">
                      <span>{project.metrics}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;