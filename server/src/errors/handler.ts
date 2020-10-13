import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup';

import AppError from './AppError'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (err, req, resp, _) => {
  console.error(err);

  if (err instanceof AppError) {
    return resp.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }
  if (err instanceof ValidationError) {
    let errors: ValidationErrors = {}

    err.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return resp.status(422).json({
      status: 'error',
      message: 'Validation fails',
      errors
    })
  }

  return resp.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}

export default errorHandler