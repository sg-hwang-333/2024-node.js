const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get("/home", (req, res) => {
    if(req.cookies.user) {
        res.send(req.cookies);
    }else {
        res.send("저장된 쿠키가 없습니다.");
    }
});

app.get("/setCookie", (req, res) => {
    res.cookie("cookie", {
        grade: "gold"
    });
    res.redirect("/home");
});

app.get("/setCookie/:name", (req, res) => {
    res.cookie("cookie", {
        grade: req.params.name
    });
    res.redirect("/home");
});


app.listen(3003, function() {
    console.log("3003 포트입니다.");
});