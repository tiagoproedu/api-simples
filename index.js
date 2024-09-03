const express = require("express");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");

const app = express();

app.use(express.json());

app.get("/",authMiddleware, (req, res) => {
    res.send("Hello World");
});

app.use("/auth", authRoutes);

app.use("/users", userRoutes);

app.listen(8080, () => {
    console.log("Estou rodando na porta 8080")
});