import { NextFunction, Request, Response } from 'express';
import { CustomError } from './custom-error';
import { InternalServerError } from './internal-server-error';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

    if (err instanceof CustomError) {
        console.debug(err);
        return res.status(err.statusCode).json(err.serializeErrors());
    }

    // in case the error is not a custom error, we need to hide
    // the details in particular the stack trace
    console.error(err);
    const internalErr = new InternalServerError();
    res.status(internalErr.statusCode).json(internalErr.serializeErrors());
}