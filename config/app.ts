import express from 'express'
import startDB from './startDB'

// Initialize MongoDB
startDB()

// Constructs new instance of Express
const app = express()

export default app