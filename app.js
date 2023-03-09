const express = require('express');
import('node-fetch').then(fetch => {
  // Use fetch here
}).catch(err => {
  // Handle errors here
});

const app = express();
const port = 3030;

// API URLs
const apiUrls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/comments/1',
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/albums/1'
];

// Route for handling API calls
app.get('/api/:index', (req, res) => {
  const index = req.params.index;
  if (index < 0 || index >= apiUrls.length) {
    return res.status(400).send('Invalid API index');
  }
  fetch(apiUrls[index])
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => res.status(500).send(error.message));
});

// Serve the HTML file
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
