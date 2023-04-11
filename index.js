import express from 'express'
import history from 'connect-history-api-fallback'
import chalk from 'chalk'
import { WebSocketServer } from 'ws'
import expressWs from 'express-ws'

const app = express()
app.use('/public', express.static('public'))
app.use(history())
expressWs(app)

app.all('*', (req, res, next) => {
    const { origin, Origin, referer, Referer } = req.headers;
    const allowOrigin = origin || Origin || referer || Referer || '*';
    res.header("Access-Control-Allow-Origin", allowOrigin);
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); // 可以带cookies
    res.header("X-Powered-By", 'Express');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
})

app.get('/', (req, res) => {
    res.send("服务启动成功")
})
app.get('/login', (req, res) => {
    const { username, password, remember } = req.query
    res.send({
        ws: 'ws://127.0.0.1:8081'
    })
})
app.get('/wslink', (req, res) => {
    res.send({
        ws: 'ws://127.0.0.1:8081'
    })
})

app.listen(8081, '127.0.0.1', () => {
    console.log(
        chalk.green(`服务器已启动，http://127.0.0.1:8081`)
    )
})

