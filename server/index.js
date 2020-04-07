const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const connectDB = require('./db')
const path = require('path')
const accountone = require('./routes/accountone')
const accounttwo = require('./routes/accounttwo')

dotenv.config()

const PORT = process.env.PORT || 8080

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/personal', accountone)
app.use('/api/business', accounttwo)

app.use(express.static('../build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
})




app.listen(PORT, () => console.log('server running on ' + PORT))