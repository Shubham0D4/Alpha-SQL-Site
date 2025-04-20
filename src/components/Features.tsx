import React from 'react';
import { motion } from 'framer-motion';
import { Search, Database, RefreshCw, Shield, Zap, Code } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Simplified Connection',
      description: 'Easy database connection with promise-based API for smooth setup and teardown'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Powerful Queries',
      description: 'Multiple query methods including findAll, findByWhere, findWithOrder, and more'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Operations',
      description: 'All queries use parameterized statements to prevent SQL injection attacks'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'CRUD Operations',
      description: 'Full support for Create, Read, Update, and Delete operations with clean APIs'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Optimized Performance',
      description: 'Efficient connection management and query execution for high-performance apps'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Flexible Schema',
      description: 'Dynamic table creation and modification with intuitive JavaScript objects'
    }
  ];

  return (
    <section id="features" className="section relative bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent opacity-30 pointer-events-none"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our MySQL module provides everything you need to interact with your database effectively, with a clean and intuitive API that makes database operations a breeze.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="rounded-full bg-blue-600/20 p-3 text-blue-400 w-12 h-12 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;