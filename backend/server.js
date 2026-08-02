require("dotenv").config();
const express = require("express");
const cors = require("cors");

const equipmentRoutes = require("./routes/equipment");
const userRoutes = require("./routes/users");
const categoryRoutes = require("./routes/categories");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/equipment", equipmentRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

//pp.listen(5000, () => {
//console.log("NEW BACKEND STARTED");
//});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
