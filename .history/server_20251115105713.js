import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import connectDB from "./db/connect.js";
import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Swagger setup
const swaggerDocument = JSON.parse(fs.readFileSync("./swagger.json", "utf-8"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

// Default route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Book Library API",
        documentationURL: `${req.protocol}://${req.get("host")}/api-docs`
    });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
