
const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send('포트연결완료');
});
router.get("/:name",(req,res)=>{
    res.send(`${req.params.name}페이지입니다.`);
});

module.exports = router;