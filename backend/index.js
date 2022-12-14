import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import cors from "cors";

const app = express();

// Enable CORS
app.use(cors());

// Connect to DB
db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

// Define port
const port = process.env.PORT || 4001;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add router
app.use("/", router);

app.listen(port, () => {
  console.log(`Server Working at Port: ${port}`);
});
