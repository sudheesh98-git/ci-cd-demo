
import express from "express";
import dotenv from "dotenv";
import sum from "./sum.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
    timestamp: new Date().toISOString()
  });
});

// Home route
app.get("/getSum/:a/:b", async(req, res) => {
  const {a , b} = req.params;
  res.json({
    ans: sum(parseInt(a),parseInt(b))
  })
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
