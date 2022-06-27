import express from 'express'
import expressJSDocSwagger from 'express-jsdoc-swagger'
import startDB from './startDB'
import swaggerOptions from './swagger'

// Initialize MongoDB
startDB()

// Constructs new instance of Express
const app = express()

// Set up jsdoc swagger
expressJSDocSwagger(app)(swaggerOptions);

export default app