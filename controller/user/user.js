'use strict'

import errorCode from '../../errorCode/index.js'

class User {
    constructor() {
        this.login = this.login.bind(this)
    }
    async login(req, res, next) {
        res.send({
            rtnCode: errorCode.SUCCES,
            msg: 'OK',
            data: {

            }
        })
    }
}

export default new User()
