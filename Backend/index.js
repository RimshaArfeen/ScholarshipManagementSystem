
// Import required modules
import express from  "express"
const PORT = 3000;

// Initialize the Express app
const app = express();

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is your custom Node.js backend!');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});