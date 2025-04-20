import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';

const Documentation: React.FC = () => {
  const [activeFunction, setActiveFunction] = useState('connect');

  const functions = [
    {
      id: 'connect',
      name: 'connect(options)',
      description: 'Establishes a connection to the MySQL database',
      example: `const db = require('alpha-sql');

// Connect to the database
db.connect({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myapp'
})
.then(connection => {
  console.log('Connected successfully!');
})
.catch(err => {
  console.error('Failed to connect:', err);
});`
    },
    {
      id: 'disconnect',
      name: 'disconnect()',
      description: 'Closes the active database connection',
      example: `// Close the database connection
db.disconnect()
  .then(() => {
    console.log('Database connection closed');
  })
  .catch(err => {
    console.error('Error closing connection:', err);
  });`
    },
    {
      id: 'createTable',
      name: 'createTable(tableName, schema)',
      description: 'Creates a new table with the specified schema',
      example: `// Create a new table
db.createTable('products', {
  id: { type: 'INT', isnull: false, isprimarykey: true },
  name: { type: 'VARCHAR(100)', isnull: false },
  price: { type: 'DECIMAL(10,2)' },
  category: { type: 'VARCHAR(50)' },
  created_at: { type: 'TIMESTAMP', isnull: false }
})
.then(() => {
  console.log('Table created successfully');
})
.catch(err => {
  console.error('Error creating table:', err);
});`
    },
    {
      id: 'insert',
      name: 'insert(tableName, data)',
      description: 'Inserts a new record into the specified table',
      example: `// Insert a new record
db.insert('products', {
  name: 'Wireless Headphones',
  price: 89.99,
  category: 'Electronics',
  created_at: new Date()
})
.then(result => {
  console.log('Product inserted with ID:', result.insertId);
})
.catch(err => {
  console.error('Error inserting product:', err);
});`
    },
    {
      id: 'findAll',
      name: 'findAll(tableName, options)',
      description: 'Retrieves all records from the specified table with optional pagination',
      example: `// Find all products with pagination
db.findAll('products', { 
  limit: 10, 
  offset: 0 
})
.then(products => {
  console.log('Products found:', products);
})
.catch(err => {
  console.error('Error finding products:', err);
});`
    },
    {
      id: 'findColumns',
      name: 'findColumns(tableName, columns, options)',
      description: 'Retrieves specific columns from the table with optional pagination',
      example: `// Find specific columns
db.findColumns('products', ['name', 'price'], {
  limit: 5,
  offset: 0
})
.then(products => {
  console.log('Product details:', products);
})
.catch(err => {
  console.error('Error finding products:', err);
});`
    },
    {
      id: 'findByWhere',
      name: 'findByWhere(tableName, conditions, options)',
      description: 'Finds records matching specific conditions using AND logic',
      example: `// Find products with specific conditions
db.findByWhere('products', {
  category: 'Electronics',
  price: 89.99
}, { 
  limit: 5 
})
.then(products => {
  console.log('Matching products:', products);
})
.catch(err => {
  console.error('Error finding products:', err);
});`
    },
    {
      id: 'findByOR',
      name: 'findByOR(tableName, conditions, options)',
      description: 'Finds records matching any of the specified conditions using OR logic',
      example: `// Find products matching any condition
db.findByOR('products', {
  category: 'Electronics',
  price: 89.99
}, { 
  limit: 5 
})
.then(products => {
  console.log('Matching products:', products);
})
.catch(err => {
  console.error('Error finding products:', err);
});`
    },
    {
      id: 'findGroup',
      name: 'findGroup(tableName, groupByCols, having, where, selectedCols, options)',
      description: 'Groups records with AND logic for WHERE and HAVING clauses',
      example: `// Group products by category
db.findGroup(
  'products',
  ['category'],
  { total_price: 1000 },
  { in_stock: true },
  ['category', 'COUNT(*) as count', 'SUM(price) as total_price'],
  { limit: 10 }
)
.then(results => {
  console.log('Grouped results:', results);
})
.catch(err => {
  console.error('Error grouping products:', err);
});`
    },
    {
      id: 'findGroupByOR',
      name: 'findGroupByOR(tableName, groupByCols, having, where, selectedCols, options)',
      description: 'Groups records with OR logic for both WHERE and HAVING clauses',
      example: `// Group products with OR conditions
db.findGroupByOR(
  'products',
  ['category'],
  { total_price: 1000, count: 5 },
  { price: 99.99, category: 'Electronics' },
  ['category', 'COUNT(*) as count', 'SUM(price) as total_price'],
  { limit: 10 }
)
.then(results => {
  console.log('Grouped results:', results);
})
.catch(err => {
  console.error('Error grouping products:', err);
});`
    },
    {
      id: 'findWithOrderASC',
      name: 'findWithOrderASC(tableName, where, options)',
      description: 'Finds records with ascending order on a specified column',
      example: `// Find products ordered by price (ascending)
db.findWithOrderASC('products', 
  { category: 'Electronics' }, 
  {
    orderBy: 'price',
    limit: 10
  }
)
.then(products => {
  console.log('Products ordered by price (low to high):', products);
})
.catch(err => {
  console.error('Error finding products:', err);
});`
    },
    {
      id: 'findWithOrderDESC',
      name: 'findWithOrderDESC(tableName, where, options)',
      description: 'Finds records with descending order on a specified column',
      example: `// Find products ordered by price (descending)
db.findWithOrderDESC('products', 
  { category: 'Electronics' }, 
  {
    orderBy: 'price',
    limit: 10
  }
)
.then(products => {
  console.log('Products ordered by price (high to low):', products);
})
.catch(err => {
  console.error('Error finding products:', err);
});`
    },
    {
      id: 'find',
      name: 'find(options)',
      description: 'Advanced query builder with support for complex queries',
      example: `// Complex query with multiple conditions
db.find({
  table: 'products',
  columns: ['id', 'name', 'price'],
  where: { category: 'Electronics' },
  or: { price: 99.99 },
  groupBy: ['category'],
  having: { total: { '>': 1000 } },
  orderBy: { price: 'DESC' },
  limit: 10,
  joins: [{
    type: 'LEFT',
    table: 'categories',
    on: { left: 'category_id', right: 'id' }
  }]
})
.then(results => {
  console.log('Query results:', results);
})
.catch(err => {
  console.error('Error executing query:', err);
});`
    },
    {
      id: 'update',
      name: 'update(options)',
      description: 'Updates records in the database matching specified conditions',
      example: `// Update product information
db.update({
  table: 'products',
  set: { 
    price: 79.99, 
    updated_at: new Date() 
  },
  where: { id: 1 }
})
.then(result => {
  console.log('Updated', result.affectedRows, 'product(s)');
})
.catch(err => {
  console.error('Error updating product:', err);
});`
    },
    {
      id: 'deleteRecords',
      name: 'deleteRecords(options)',
      description: 'Deletes records from the database matching conditions',
      example: `// Delete products
db.deleteRecords({
  table: 'products',
  where: { category: 'Discontinued' }
})
.then(result => {
  console.log('Deleted', result.affectedRows, 'product(s)');
})
.catch(err => {
  console.error('Error deleting products:', err);
});`
    },
    {
      id: 'rawQuery',
      name: 'rawQuery(sql, values)',
      description: 'Executes a raw SQL query with parameterized values',
      example: `// Execute a custom SQL query
db.rawQuery(
  'SELECT * FROM products WHERE price > ? AND category = ? ORDER BY created_at DESC LIMIT 5',
  [50, 'Electronics']
)
.then(results => {
  console.log('Query results:', results);
})
.catch(err => {
  console.error('Error executing query:', err);
});`
    }
  ];

  return (
    <section id="documentation" className="section bg-gray-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Documentation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the full API documentation with examples for each function and method.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/4"
          >
            <div className="bg-gray-800 rounded-lg p-4 sticky top-20">
              <h3 className="text-lg font-semibold mb-4 px-3">Functions</h3>
              <nav className="space-y-1">
                {functions.map((func) => (
                  <button
                    key={func.id}
                    onClick={() => setActiveFunction(func.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeFunction === func.id
                        ? 'bg-blue-600/20 text-blue-400'
                        : 'hover:bg-gray-700/50'
                    }`}
                  >
                    {func.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-3/4"
          >
            {functions.map((func) => (
              <div
                key={func.id}
                className={`bg-gray-800 rounded-lg p-6 mb-6 ${
                  activeFunction === func.id ? 'block' : 'hidden'
                }`}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{func.name}</h3>
                <p className="text-gray-400 mb-6">{func.description}</p>
                
                <h4 className="text-md font-medium mb-3 text-gray-300">Example Usage:</h4>
                <CodeBlock 
                  code={func.example} 
                  language="javascript"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;