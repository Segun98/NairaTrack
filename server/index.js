const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const connectDB = require('./db')

dotenv.config()

connectDB()
app.use(express.json())
app.use(cors())
const accountone = require('./routes/accountone')
const accounttwo = require('./routes/accounttwo')

app.use('/api/personal', accountone)
app.use('/api/business', accounttwo)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('server running on ' + PORT))