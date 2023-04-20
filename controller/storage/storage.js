'use strict'

import errorCode from '../../errorCode/index.js'
import { getDriveList } from '../../utils/getFiles.js'

class Storage {
    constructor() {

    }
    async drives(req, res, next) {
        const data = await getDriveList()
        res.send({
            rtnCode: errorCode.SUCCES,
            msg: 'OK',
            data
        })
    }
}

export default new Storage()
