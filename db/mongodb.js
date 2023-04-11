'use strict'

import mongoose from 'mongoose'
import config from '../config/config'

mongoose.connect(mongoIP, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', error => {
    console.error.bind(console, `connection error:${error}`)
});

db.once('open', () => console.log('数据库连接成功'));

db.on('close', () => {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect(config.url, { server: { auto_reconnect: true } });
});

export default db;



