
// Import required modules
import express from "express";
import mongoose from 'mongoose';
import User from "./Schema/Applicant.js";  // Ensure correct path & extension
import StudentInfo from "./Schema/StudentInfo.js";
import cors from "cors"
import multer from "multer";
import fs from "fs"
import JWT from "jsonwebtoken"
import Admin from "./Schema/AdminSchema.js";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jwtKey = "jwtSecrectKey"
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Initialize the Express app
const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());


//Apply Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Adds timestamp to avoid duplicates
  }
});


const upload = multer({ storage: storage })
// Basic route for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello, this is your custom Node.js backend!');
// });


app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "Frontend", "dist")));
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
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
      JWT.sign({user} , jwtKey , {expiresIn : "2m"} , (err, token) => {
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
app.post("/applicationForm", upload.single("file"), async (req, res) => {
  try {
    const formFields = req.body;
    const file = req.file;

    const student = new StudentInfo({
      ...formFields,
      documentPath: file?.path || ""
    });

    const result = await student.save();

    res.status(201).json({ message: "Form submitted successfully", data: result });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/download/:fileName" , (req, res) => {
  const fileName = req.params.fileName
  const filePath = path.join(__dirname,"uploads", fileName)
  try {
    
    if (fs.existsSync(filePath)) {
      res.send(filePath)
    }
    else{
      res.status(404).send("File not found")
    }
  } catch (error) {
    console.log("No file received");
    
  }
})
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
