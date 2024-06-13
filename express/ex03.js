const express = require('express');
const app = express();
const dotenv = require("dotenv").config(); 

app.get("/", (req, res) => {
    res.send('포트연결완료');
});


app.set('port', process.env.PORT);

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 실행");
})
