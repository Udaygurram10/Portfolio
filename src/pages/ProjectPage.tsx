import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = {
  'shipment-visibility': {
    title: 'Shipment Visibility Campaign',
    overview: 'A comprehensive campaign that revolutionized how customers track their shipments, resulting in significantly improved engagement metrics.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=2000',
    technologies: ['Google Analytics', 'Mailchimp', 'Custom Dashboard', 'API Integration'],
    features: [
      'Real-time tracking updates',
      'Automated email notifications',
      'Interactive tracking dashboard',
      'Mobile-responsive design'
    ],
    challenges: [
      {
        title: 'Data Integration',
        description: 'Integrating multiple shipping carriers APIs into a unified tracking system.'
      },
      {
        title: 'User Experience',
        description: 'Creating an intuitive interface for users to track multiple shipments simultaneously.'
      }
    ],
    outcomes: [
      '60% increase in customer engagement',
      '45% reduction in tracking-related support tickets',
      '85% positive user feedback'
    ]
  },
  'whatsapp-integration': {
    title: 'WhatsApp API Integration',
    overview: 'Implementation of WhatsApp Business API to streamline customer service operations and improve response times.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=2000',
    technologies: ['WhatsApp Business API', 'Node.js', 'MongoDB', 'Express.js'],
    features: [
      'Automated responses',
      'Ticket management system',
      'Analytics dashboard',
      'Multi-agent support'
    ],
    challenges: [
      {
        title: 'Message Threading',
        description: 'Maintaining conversation context across multiple customer interactions.'
      },
      {
        title: 'Scale Management',
        description: 'Handling high message volumes during peak periods.'
      }
    ],
    outcomes: [
      '30% increase in customer engagement',
      '50% faster response times',
      '40% reduction in support costs'
    ]
  },
  'ecommerce-platform': {
    title: 'E-commerce Platform',
    overview: 'A no-code e-commerce solution built using Shopify, optimized for conversion and user experience.',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=2000',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Google Analytics'],
    features: [
      'Custom theme development',
      'Advanced product filtering',
      'Automated inventory management',
      'Integrated blog platform'
    ],
    challenges: [
      {
        title: 'Performance Optimization',
        description: 'Balancing feature-rich content with fast load times.'
      },
      {
        title: 'Mobile Experience',
        description: 'Creating a seamless mobile shopping experience.'
      }
    ],
    outcomes: [
      '25% increase in conversion rate',
      '40% improvement in page load speed',
      '35% increase in mobile sales'
    ]
  }
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link to="/" className="text-coral hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div 
          className="h-[40vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <div className="flex gap-4 justify-center">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center text-coral hover:text-coral/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">{project.overview}</p>
              </section>

              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Challenges */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Implementation Challenges</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Outcomes */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Project Outcomes</h3>
                <ul className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center text-coral hover:underline"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-coral hover:underline"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;