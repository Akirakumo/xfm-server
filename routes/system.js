'use strict'

import express from 'express'
import System from '../controller/system/system.js'
const router = express.Router()

router.get('/info', System.info)
router.get('/usage', System.usage)
router.get('/time', System.time)

export default router