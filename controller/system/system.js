import os from 'os'

// 获取系统信息
app.get('/system/info', (req, res) => {

    // console.log('CPUS： ' + os.cpus());

    // console.log('获取计算机名称： ' + os.hostname());

    // console.log('获取操作系统类型： ' + os.type());

    // console.log('获取操作系统平台： ' + os.platform());

    // console.log('获取CPU架构： ' + os.arch());

    // console.log('获取操作系统版本号： ' + os.release());

    // console.log('获取系统当前运行的时间： ' + os.uptime())

    // console.log('系统总内存量： ' + (os.totalmem() / 1024 / 1024 / 1024).toFixed(1) + 'G')

    // console.log('空闲内存：' + (os.freemem() / 1024 / 1024 / 1024).toFixed(1) + 'G');

    res.json({
        rtnCode: 0,
        msg: 'OK',
        data: {
            hostname: os.hostname(),
            cpus: os.cpus(),
            arch: os.arch(),
            os: os.platform(),
            totalmem: (os.totalmem() / 1024 / 1024 / 1024).toFixed(1),
            freemem: (os.freemem() / 1024 / 1024 / 1024).toFixed(1),
            network: os.networkInterfaces()
        }
    });
})

// socket.io
// io.on('connection', socket => {

//     console.log('a user connected')
//     socket.emit('connected', '连接成功')

//     openSysInfo(socket)

//     socket.on('disconnect', data => {
//         console.log(data)
//         socket.emit('unConnection', '断开连接')
//         closeSysInfo()
//     })

// })