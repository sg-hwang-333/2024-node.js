const express = require("express");
const app = express();


app.listen('3001',function(){
    console.log('3001 포트입니다.');
});

const test04Router = require('./test04Router');
app.use('/form',test04Router);
