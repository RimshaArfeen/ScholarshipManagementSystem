
// Import required modules
import express from "express";
import mongoose from 'mongoose';
import User from "./Schema/Applicant.js";  // Ensure correct path & extension
import StudentInfo from "./Schema/StudentInfo.js";
import cors from "cors"
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ScholarshipManagementSys")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Initialize the Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is your custom Node.js backend!');
});

// POST route for user signup
app.post('/signUp', async (req, res) => {
  try {
    let user = new User(req.body)
    let result = await user.save()
    result = result.toObject()
    delete result.password
    res.json({ message: 'User signed up successfully', result });
  } catch (error) {
    res.send(`Encountering error , Error : ${error}`)
    res.status(500).send(`Encountering error, Error: ${error.message}`);


  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  if (email && password) {
    let user = await User.findOne({ email, password }).select("-password");
    
    if (user) {
      res.json(user);  // Send user data as JSON
    } else {
      res.json({ error: "No User Found" });  // Send error message as JSON
    }
  } else {
    res.json({ error: "Please enter your email and password" });  // Send validation error as JSON
  }
});

app.post("/applicationForm", async (req, res) => {
  try {
    // Create a new instance of the StudentInfo model
    const student = new StudentInfo(req.body);
    
    // Save the data to the database
    const result = await student.save();
    
    // Send the saved data as a response
    res.send(result);  // 201 for successful resource creation
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
