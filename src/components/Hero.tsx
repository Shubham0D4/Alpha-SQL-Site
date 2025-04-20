import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, LineChart, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 pointer-events-none"></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      
      <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-6">
                MySQL Made Easy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Powerful MySQL <span className="gradient-text">Database Toolkit</span> for Node.js
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
                Simplify your database operations with an intuitive, powerful, and feature-rich MySQL module for Node.js applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#installation" className="btn btn-primary">
                  Install Now
                </a>
                <a href="#documentation" className="btn btn-secondary">
                  View Documentation
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="code-block rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="bg-gray-800 py-3 px-4 border-b border-gray-700 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-3 text-sm text-gray-400">example.js</span>
              </div>
              <pre className="text-sm bg-gray-900 p-4 overflow-x-auto">
                <code className="text-gray-300">
                  <span className="text-blue-400">const</span> <span className="text-green-400">db</span> = <span className="text-blue-400">require</span>(<span className="text-orange-400">'alpha-sql'</span>);
<br/><br />
<span className="text-gray-500">// Connect to database</span><br/>
<span className="text-blue-400">await</span> db.<span className="text-yellow-400">connect</span>({'{'}
  host: <span className="text-orange-400">'localhost'</span>,<br/>
  user: <span className="text-orange-400">'root'</span>,<br/>
  password: <span className="text-orange-400">'password'</span>,<br/>
  database: <span className="text-orange-400">'myapp'</span><br/>
{'}'});<br/>
{/* 
<span className="text-gray-500">// Create a users table</span><br/>
<span className="text-blue-400">await</span> db.<span className="text-yellow-400">createTable</span>(<span className="text-orange-400">'users'</span>, {'{'}<br/>
  id: {'{'} <span className="text-purple-400">type</span>: <span className="text-orange-400">'INT'</span>, <span className="text-purple-400">isnull</span>: <span className="text-blue-400">false</span>, <span className="text-purple-400">isprimarykey</span>: <span className="text-blue-400">true</span> {'}'},
<br/>name: {'{'} <span className="text-purple-400">type</span>: <span className="text-orange-400">'VARCHAR(100)'</span> {'}'},
 <br/>email: {'{'} <span className="text-purple-400">type</span>: <span className="text-orange-400">'VARCHAR(100)'</span>, <span className="text-purple-400">isnull</span>: <span className="text-blue-400">false</span> {'}'}
{'}'});
<br/>
<span className="text-gray-500">// Insert a user</span><br/>
<span className="text-blue-400">const</span> <span className="text-green-400">result</span> = <span className="text-blue-400">await</span> db.<span className="text-yellow-400">insert</span>(<span className="text-orange-400">'users'</span>, {'{'}<br/>
  name: <span className="text-orange-400">'John Doe'</span>,<br/>
  email: <span className="text-orange-400">'john@example.com'</span><br/>
{'}'});<br/>

<span className="text-gray-500">// Find all users</span><br/>
<span className="text-blue-400">const</span> <span className="text-green-400">users</span> = <span className="text-blue-400">await</span> db.<span className="text-yellow-400">findAll</span>(<span className="text-orange-400">'users'</span>);<br/> */}</code>
              </pre>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-6 justify-center mt-20"
        >
          {[
            { icon: <Database className="h-6 w-6" />, title: "Simple API", text: "Intuitive methods for all MySQL operations" },
            { icon: <Code2 className="h-6 w-6" />, title: "Promise-based", text: "Modern async/await compatible design" },
            { icon: <LineChart className="h-6 w-6" />, title: "Feature Rich", text: "Advanced queries, joins, and more" },
            { icon: <Lock className="h-6 w-6" />, title: "Secure", text: "Parameterized queries prevent SQL injection" }
          ].map((item, index) => (
            <div key={index} className="card flex items-start gap-4 max-w-xs">
              <div className="rounded-full bg-blue-600/20 p-3 text-blue-400 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;