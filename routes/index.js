'use strict'

import user from './user.js'
import system from './system.js'

export default app => {
    app.use('/user', user)
    app.use('/system', system)
}