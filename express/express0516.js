// npm i express-session
const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret : "AnimalBananaCandy"
}));

app.get("/", (req,res) => {
    if (req.session.user) {
        res.redirect("/getUser");
    } else {
        res.send("세션이 없습니다");
    }
})

app.get('/setUser', (req, res) => {
    req.session.user = { name: "kim", age: 29 }
    res.redirect("/getUser");
})
app.get('/setUser/:name', (req, res) => {
    req.session.user = { name: req.params.name, age: 29 }
    res.redirect("/getUser");
})

app.get("/getUser", (req,res) => {
    res.send(req.session.user);
})

app.get("/deleteSession", (req,res) => {
    if(req.session.user) {
        req.session.destroy(() => {
            res.redirect("/getUser");
        })
    } else {
        res.send("제거할 세션이 없습니다.");
    }
})

// 1. setUser/yoon => user name이 yoon으로 등록되게 라우터 만들기
// 2. / => 루트 라우터일때 세션이 있는지 없는지 안내하기

app.listen(8889, ()=> {
    console.log("8889포트입니다");
})