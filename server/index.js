const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const connectDB = require('./db')
const path = require('path')

dotenv.config()

connectDB()
app.use(express.json())
app.use(cors())
const accountone = require('./routes/accountone')
const accounttwo = require('./routes/accounttwo')

app.use('/api/personal', accountone)
app.use('/api/business', accounttwo)


app.use(express.static('../build'));

app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, '../build'))
    res.sendFile(path.join(__dirname, 'cd ..', 'build', 'index.html'));
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('server running on ' + PORT))