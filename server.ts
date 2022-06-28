import app from "./config/app";
import dotenv from "dotenv";

dotenv.config();

// Set port
const PORT = process.env.PORT as string;

// Initialize server to listen
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
