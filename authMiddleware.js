const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== "mysecrettoken") {
    return res.status(403).json({ error: "Invalid or missing Bearer token" });
  }

  next();
};

export default authMiddleware;
