import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

/**
 * Returns Mongoose connection
 * 
 * @returns Mongoose connection 
 */
function startDB() {
    // Set MongoDB uri
    const uri = process.env.MONGO_URI;

    // Set up mongoose connection
    mongoose.connect(uri as string)

    // Get mongoose default connection
    const db = mongoose.connection

    // Bind connection with error event
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    return db
}

export default startDB