const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(cookieParser());

app.get('/', (req, res) => {
    // ("키", "값", {속성})
    // res.cookie('cookie', 'chichock', {
    //     maxAge: 500000,


    // });
    // res.send("<h1>홈입니다</h1>");
    const cookie = req.cookies.cookie;
    if (cookie) {
        res.send(`<h1>${cookie}입니다</h1>`)
    } else {
        res.send("<h1>로그인되지 않았습니다</h1>")
    }
})

app.get("/login", (req, res) => {
    res.cookie('cookie', '황슬기', {
        maxAge: 500000,
    });
    
    res.send("<h1>쿠키 값 설정</h1>")
})
app.get("/logout", (req, res) => {
    res.clearCookie("cookie")
    res.send("<h1>쿠키 값 제거</h1>")
})

app.get("/cookie", (req, res) => {
    const c1 = req.cookies.cookie;
    res.send(`<h1>쿠키페이지입니다 ${c1}</h1>`);
})

app.get("/clear", (req, res) => {
    res.clearCookie("cookie");
    res.send("<h1>쿠키가 삭제되었습니다.</h1>")
})

app.listen(3000);