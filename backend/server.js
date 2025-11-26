const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  console.log("POST /api/login received");     // log request
  console.log("Request body:", req.body);      // log email/password

  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Email and password required." });
  }

  if (email === "dominique@gmail.com" && password === "123456") {
    return res.json({ success: true, message: "Login successful!" });
  }

  return res.json({ success: false, message: "Invalid credentials." });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
