import "./config/instrument.js"
import express from "express";
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebHooks } from "./controllers/webhooks.js";

// Initialize Express

const app = express()
// connect db
await connectDB()
// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get("/" , (req,res) => res.send("Api Working"))
// sentry for debugging
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhooks", clerkWebHooks);
// Server Port
const PORT = process.env.PORT || 5000

// Add this after all routes,
// but before any and other error-handling middlewares are defined
Sentry.setupExpressErrorHandler(app);

// port running
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})
