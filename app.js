import express from "express";
import setupApp from "./config/appConfig.js";

const app = express();
setupApp(app); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
