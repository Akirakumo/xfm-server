'use strict'

import errorCode from '../../errorCode/index.js'
import { getSysInfo } from '../../utils/getSysInfo.js'

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
}

export default new System()
