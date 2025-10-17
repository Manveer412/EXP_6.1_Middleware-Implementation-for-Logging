export const publicRoute = (req, res) => {
  res.json({
    message: "This is a public route — no authentication required.",
  });
};

export const protectedRoute = (req, res) => {
  res.json({
    message: "Welcome! You have access to the protected route.",
  });
};
