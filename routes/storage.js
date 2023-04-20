'use strict'

import express from 'express'
import Storage from '../controller/storage/storage.js'
const router = express.Router()

router.get('/drives', Storage.drives)

export default router