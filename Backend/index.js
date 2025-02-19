
// Import required modules
import express from "express";
import mongoose from 'mongoose';
import User from "./Schema/Applicant.js";  // Ensure correct path & extension
import StudentInfo from "./Schema/StudentInfo.js";
import cors from "cors"
import JWT from "jsonwebtoken"
import Admin from "./Schema/AdminSchema.js";

const jwtKey = "jwtSecrectKey"
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
app.post('/signup', async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;

    // Generate JWT token before sending response
    JWT.sign({ result }, jwtKey, { expiresIn: "5000s" }, (err, token) => {
      if (err) {
        return res.status(500).json({ message: "Something went wrong with token generation" });
      } 
      
      res.json({
        message: 'User signed up successfully',
        result,
        auth: token
      });
    });

  } catch (error) {
    return res.status(500).json({ message: "Encountering error", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  if (email && password) {
    let user = await User.findOne({ email, password }).select("-password");
    
    if (user) {
      JWT.sign({user} , jwtKey , {expiresIn : "2h"} , (err, token) => {
        if (err) {
          res.send("Something went wrong")

        } else {
          res.json({
            user, auth:token
          })
        }
      }
      )
    } else {
      res.json({ error: "No User Found" });  // Send error message as JSON
    }
  } else {
    res.json({ error: "Please enter your email and password" });  // Send validation error as JSON
  }
});

//Form for scholarship
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

//User Login Profile route
app.get("/profile", verifyToken, (req, res) => {
  JWT.verify(req.token, jwtKey, (err, authData) => {
    if (err) {
      res.status(403).json({ result: "Please provide a valid token" });
    } else {
      res.json({ authData });
    }
  });
});

//Admin page to view the the applications
app.get("/adminPg", async (req, res) => {
  try {
    let studentData = await StudentInfo.find(); // Fetch data
    res.json({studentData}); // Send response as JSON
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

//Accepting and rejecting applications
app.put("/adminPg/:id" , async(req, res) => {
  const { id } = req.params;
  const { status } = req.body; // 'Approved' or 'Rejected'

  const updApplication =  await StudentInfo.findByIdAndUpdate(id, {status} , {new : true})
  if (res.status(200)) {
    res.json({ message: `Application ${status.toLowerCase()} successfully`, updApplication });
    
  }
})

// Middleware to verify token
function verifyToken(req, res, next) {
  let bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    let token = bearerHeader.split(" ")[1]; // Extract token
    req.token = token;
    next(); // Call next middleware
  } else {
    res.status(403).json({ message: "Please provide a valid token" });
  }
}


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
