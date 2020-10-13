import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'path'

import './database/connection'

import routes from './routes'

import errorHandler from './errors/handler'

const app = express()
app
  .use(cors())
  .use(express.json())

  .use(routes)

  .use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

  .use(errorHandler)

  .listen(3333, () => console.log('=>> Server is running on 3333'))
