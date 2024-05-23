// npm install express
const express = require('express');
const app = express();

// npm install dotenv
const dotenv = require('dotenv').config();

// npm install morgan
const morgan = require('morgan');
app.use(morgan('dev'));

// npm install cors
const cors = require('cors');         
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}))

app.set('port', process.env.PORT);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행');
})
