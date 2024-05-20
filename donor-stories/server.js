const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Import the donors router
const donorsRouter = require('./api/donors');

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Use the donors router for requests to '/api/donors'
app.use('/api/donors', donorsRouter);

// Serve static files from uploads
app.use('/uploads', express.static('uploads'));

// Serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
