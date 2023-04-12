import os from 'os'
import osUtils from "os-utils"

// console.log('CPUS： ' + os.cpus());
// console.log('获取计算机名称： ' + os.hostname());
// console.log('获取操作系统类型： ' + os.type());
// console.log('获取操作系统平台： ' + os.platform());
// console.log('获取CPU架构： ' + os.arch());
// console.log('获取操作系统版本号： ' + os.release());
// console.log('获取系统当前运行的时间： ' + os.uptime())
// console.log('系统总内存量： ' + (os.totalmem() / 1024 / 1024 / 1024).toFixed(1) + 'G')
// console.log('空闲内存：' + (os.freemem() / 1024 / 1024 / 1024).toFixed(1) + 'G');

const getSysInfo = () => {
    let cpuUsage = 0
    osUtils.cpuUsage(value => cpuUsage = value)
    const freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2)
    const totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
    return {
        cpuUsage: (cpuUsage * 100.0).toFixed(2),
        freeMem,
        totalMem,
        usedMem: totalMem - freeMem,
        memUsage: (totalMem - freeMem) / totalMem * 100.0,
    }
}

export default getSysInfo

