const express = require('express')
const dotenv = require('dotenv')
const app = express()
const homeRoute = require('./routes/home')
const morgan = require('morgan')
const cors = require('cors')
dotenv.config()


app.use(morgan('common'));
app.use(cors());
app.use(express.json());
app.use('/api/home/',homeRoute);


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`app listening on port ${port}`))