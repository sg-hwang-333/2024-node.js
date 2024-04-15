const express = require('express')
const app = express();
const path = require('path');


app.use("/html2", express.static(path.join(__dirname, "html")));


// 미들웨어 함수 정의
// const middle1 = (req, res, next) => {
//     console.log("미들웨어 실행");

//     // 다음 미들웨어 또는 라우트 핸들러로 제어를 전달
//     next();
// }

// 모듈에서 미들웨어 함수 가져오기
const middle1 = require('./my_modules/middle1')


// 미들웨어 등록
app.use(middle1);


// 기본 경로 시 호출
app.get('/', function(req, res) {
    console.log("경로 : ", path.join(__dirname, "html"));
    res.send("Hello World!")
})

app.get('/home', function (req, res) {
    res.sendFile(__dirname+"/home.html")
});

// : 뒤에 있는 것은 어떤 텍스트를 넣든 그 이전 경로로 호출됨
app.get('/grape/:name', function (req, res) {
    console.log('path', req.path);
    console.log('params', req.params);
    console.log('query', req.query);
    res.send("포토페이지입니다");
});

app.listen(3000);