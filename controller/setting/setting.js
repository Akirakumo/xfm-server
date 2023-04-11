// 获取文件夹目录数据
// app.get('/getDirData', (req, res) => {

//     const { type } = req.query;

//     const dir_path = resolve(dirPath[type]);

//     const json_path = resolve(__dirname, "data", `${type}.json`);

//     console.log('收到请求/getDirData' + type);

//     (async () => {
//       try {
//         const flag = await isFileExisted(json_path);
//         if (flag) {
//           console.log("请求json目录" + json_path)
//           const data = await readJSON(json_path)
//           res.send(data)
//         } else {
//           console.log("请求文件夹目录" + dir_path)
//           const data = await initData(dir_path, type)
//           await createJSON(type, JSON.stringify(data))
//           // rds.set('comic', data);
//           res.send(data)
//         }
//       } catch (err) {
//         console.error(err)
//       }
//     })();
// })

// 获取目录
app.get('/views', (req, res) => {
    res.send([
        { type: 'comic', name: 'COMIC', url: 'd:/Storage/XFM/COMIC/' },
        { type: 'music', name: 'MUSIC', url: 'd:/Music/ALBUM/' }
    ])
})

// 获取图片
app.get('/public/thumb/comic/*', function (req, res) {
    console.log(req.url);
    // res.sendFile(__dirname + '/' + req.url);
})