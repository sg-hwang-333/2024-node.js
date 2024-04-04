const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const server = http.createServer();

server.on('request', async (req, res) => {

    // console.log('method: ', req.method);
    // console.log('url: ', req.url);
    // console.log('url1: ', url.parse(req.url));
    // console.log('url2: ', url.parse(req.url).pathname);
    // console.log('url3: ', url.parse(req.url).query);


    if (req.url.includes('/test')) {
        try {
            const data = await fs.readFile(`.${req.url}.html`);
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (e) {
            console.log(e);
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('err: ', e.message);
        }

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        res.end('<h1>연결된 페이지가 없습니다</h1>');
    }

})

server.listen(8088, () => {
    console.log('8088번 포트에서 서버가 대기중입니다');
});