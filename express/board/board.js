//이거 board 폴더 안에 있어욥~!~~!~!
//npm install express
const express = require("express");
const app = express();
 //npm install dotenv
const dotenv = require("dotenv").config(); //기본값 .env파일 생성함. 그 안에 설정값 기입

 //npm install morgan
const morgan  = require("morgan");
app.use(morgan('dev'));

 //npm install cors
const cors    = require("cors");
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials:true
}));

// 포트 설정
app.set('port', process.env.PORT || 8080 );

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 실행");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 게시글 데이터
let boardList = [];
let numOfBoard = 1;

// 게시글 API
app.get('/',(req,res)=>{
    res.send("게시글 API 확인");
});

app.get("/board",(req,res)=>{
    res.send(boardList);
});

app.post("/board",(req,res)=>{
    const board = {
        "id": numOfBoard++,
        "user_id":req.body.user_id,
        "date" : req.body.date,
        "title" : req.body.title,
        "content" : req.body.content
    };
    boardList.push(board);
    res.send("글이 등록되었습니다.");
});

app.delete("/board/:id",(req,res)=>{
    //req.params.id 값 리스트 삭제
    //찾는 요소 findItem에 넣기
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id
    });
    const idx = boardList.indexOf(findItem); //배열요소에 몇번째 있는지
    boardList.splice(idx,1);

    res.send("글이 삭제되었습니다.");
});
app.put("/board/:id",(req,res)=>{
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id
    });
    const idx = boardList.indexOf(findItem); //배열요소에 몇번째 있는지
    boardList.splice(idx,1);

    const board = {
        "id": req.params.id,
        "user_id":req.body.user_id,
        "date" : req.body.date,
        "title" : req.body.title,
        "content" : req.body.content
    };
    boardList.push(board);
    res.send("글이 수정되었습니다.");
});


