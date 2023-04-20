'use strict'

import user from './user.js'
import system from './system.js'
import storage from './storage.js'

export default app => {
    app.use('/user', user)
    app.use('/system', system)
    app.use('/storage', storage)
}