const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add the decoded token payload to the request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = verifyToken;
