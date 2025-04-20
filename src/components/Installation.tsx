import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Terminal } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Installation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('npm');

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const installCommands = {
    npm: 'npm install alpha-sql',
    yarn: 'yarn add alpha-sql',
    pnpm: 'pnpm add alpha-sql'
  };

  return (
    <section id="installation" className="section bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quick <span className="gradient-text">Installation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started in seconds with a simple install command using your preferred package manager.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-800 rounded-t-lg p-3 flex space-x-2 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('npm')}
              className={`px-4 py-2 rounded-md ${activeTab === 'npm' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
            >
              npm
            </button>
            <button
              onClick={() => setActiveTab('yarn')}
              className={`px-4 py-2 rounded-md ${activeTab === 'yarn' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
            >
              yarn
            </button>
            <button
              onClick={() => setActiveTab('pnpm')}
              className={`px-4 py-2 rounded-md ${activeTab === 'pnpm' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
            >
              pnpm
            </button>
          </div>

          <div className="bg-gray-900 rounded-b-lg p-4 relative">
            <div className="flex items-center space-x-3">
              <Terminal className="text-gray-500 h-5 w-5" />
              <code className="font-mono text-gray-300">{installCommands[activeTab as keyof typeof installCommands]}</code>
            </div>
            
            <CopyToClipboard text={installCommands[activeTab as keyof typeof installCommands]} onCopy={handleCopy}>
              <button className="absolute top-3 right-3 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-gray-300">
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </CopyToClipboard>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Setup</h3>
          <div className="code-block">
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
              <code>
                <span className="text-blue-400">const</span> <span className="text-green-400">db</span> = <span className="text-blue-400">require</span>(<span className="text-orange-400">'alpha-sql'</span>);<br/>
<br/>
<span className="text-gray-500">// Connect to your MySQL database</span><br/>
<span className="text-blue-400">async function</span> <span className="text-yellow-400">connect</span>() {'{'}<br/>
  <span className="text-blue-400">try</span> {'{'}<br/>
    <span className="text-blue-400">await</span> db.<span className="text-yellow-400">connect</span>({'{'}<br/>
       <t/>  host: <span className="text-orange-400">'localhost'</span>,<br/>
        <t/>  user: <span className="text-orange-400">'root'</span>,<br/>
        <t/>  password: <span className="text-orange-400">'password'</span>,<br/>
        <t/>  database: <span className="text-orange-400">'myapp'</span><br/>
    {'}'});<br/>
    <span className="text-purple-400"> <t/>  console</span>.<span className="text-yellow-400">log</span>(<span className="text-orange-400">'Connected to database!'</span>);<br/>
  {'}'} <span className="text-blue-400">catch</span> (err) {'{'}<br/>
    <span className="text-purple-400"> <t/>  console</span>.<span className="text-yellow-400">error</span>(<span className="text-orange-400">'Error connecting:'</span>, err);<br/>
  {'}'}<br/>
{'}'}<br/>

<span className="text-yellow-400">connect</span>();</code>
            </pre>
            <CopyToClipboard text={`const db = require('alpha-sql');

// Connect to your MySQL database
async function connect() {
  try {
    await db.connect({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'myapp'
    });
    console.log('Connected to database!');
  } catch (err) {
    console.error('Error connecting:', err);
  }
}

connect();`} onCopy={handleCopy}>
              <button className="copy-button">
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </CopyToClipboard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Installation;