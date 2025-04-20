import React from 'react';
import { Github, Twitter, Heart, Database } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold gradient-text">Alpha-SQL</span>
            </div>
            <p className="text-gray-400 max-w-md">
              A powerful and intuitive MySQL module for Node.js applications. Simplify your database operations with our easy-to-use API.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#documentation" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">API Reference</a></li>
                <li><a href="https://github.com/Shubham0D4/apha-sql" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Releases</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Stack Overflow</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-white font-medium mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Shubham0D4/apha-sql" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alpha-SQL. All rights reserved.
          </p>
          
          <div className="flex items-center text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by alpha for Developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
