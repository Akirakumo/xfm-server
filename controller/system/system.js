'use strict'

import errorCode from '../../errorCode/index.js'
import { getSysInfo, getSysUsage, getSysTime } from '../../utils/getSysInfo.js'

class System {
    constructor() {

    }
    async info(req, res, next) {
        const data = getSysInfo()
        res.send({
            rtnCode: errorCode.SUCCES,
            msg: 'OK',
            data
        })
    }
    async usage(req, res, next) {
        const data = getSysUsage()
        res.send({
            rtnCode: errorCode.SUCCES,
            msg: 'OK',
            data
        })
    }
    async time(req, res, next) {
        const data = getSysTime()
        res.send({
            rtnCode: errorCode.SUCCES,
            msg: 'OK',
            data
        })
    }
}

export default new System()
