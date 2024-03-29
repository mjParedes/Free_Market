import express from 'express'
import cors from 'cors'
import { connectDB } from './db.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.listen(process.env.PORT || 4000, () => {
    console.log('Server running on port 4000')
})

