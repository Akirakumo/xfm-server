import express from 'express'
import history from 'connect-history-api-fallback'
import chalk from 'chalk'
import expressWs from 'express-ws'

import router from './routes/index.js'

const app = express()
app.use('/public', express.static('public'))
app.use(history())
expressWs(app)

app.all('*', (req, res, next) => {
    const { origin, Origin, referer, Referer } = req.headers
    const allowOrigin = origin || Origin || referer || Referer || '*'
    res.header('Access-Control-Allow-Origin', allowOrigin)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, AppId, Secret')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('X-Powered-By', 'Express')
    if (req.method == 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})

router(app)

app.listen(8081, '127.0.0.1', () => {
    console.log(
        chalk.green(`服务器已启动，http://127.0.0.1:8081`)
    )
})

