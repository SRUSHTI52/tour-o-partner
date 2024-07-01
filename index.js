const express  = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();


//database connection
mongoose.connect(process.env.VITE_MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((error) => console.log('Database not connected', error))

//middliware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/authRoutes.js'))

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))